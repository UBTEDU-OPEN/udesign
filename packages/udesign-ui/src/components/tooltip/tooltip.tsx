import React, { isValidElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { get, throttle } from 'lodash';
import { Arrow } from './arrow';
import { mergeEvents, NativeProps, stopPropagation, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX, Placement, Trigger } from '../../constants';
import Portal from '../_portal';
import { ArrowVertical } from './arrow-vertical';

const prefix = `${BASE_CLASS_PREFIX}-tooltip`;

const getTranslateStyle = (placement: Placement): React.CSSProperties => {
  let style;
  switch (placement) {
    case 'topLeft':
      style = 'translateY(-100%)';
      break;
    case 'top':
      style = 'translateY(-100%) translateX(-50%)';
      break;
    case 'topRight':
      style = 'translateY(-100%) translateX(-100%)';
      break;
    case 'bottomLeft':
      style = '';
      break;
    case 'bottom':
      style = 'translateX(-50%)';
      break;
    case 'bottomRight':
      style = 'translateX(-100%)';
      break;
    case 'leftTop':
      style = 'translateX(-100%)';
      break;
    case 'left':
      style = 'translateX(-100%) translateY(-50%)';
      break;
    case 'leftBottom':
      style = 'translateX(-100%) translateY(-100%)';
      break;
    case 'rightTop':
      style = '';
      break;
    case 'right':
      style = 'translateY(-50%)';
      break;
    case 'rightBottom':
      style = 'translateY(-100%)';
      break;
    default:
      break;
  }
  return {
    transform: style,
  };
};

export type TooltipProps = {
  prefixCls?: string; // 接收上层组件的 className 改写，比如 Dropdown 组件。默认值：prefix
  showArrow?: boolean; // 是否显示箭头。默认值：true
  clickToHide?: boolean; //	在弹出层内点击时是否自动关闭弹出层。默认值：false
  content?: React.ReactNode; // 弹出层的内容。默认值：-
  placement?: Placement; // 弹出层的位置。默认值：top
  stopPropagation?: boolean; //	是否阻止弹出层上的点击事件冒泡。默认值：false
  trigger?: Trigger; // 触发下拉的行为, 移动端不支持 hover。默认值：hover
  mouseEnterDelay?: number; //	鼠标移入后，延迟显示的时间，单位毫秒（仅当 trigger 为 hover/focus 时生效。默认值：50
  mouseLeaveDelay?: number; //	鼠标移出后，延迟消失的时间，单位毫秒（仅当 trigger 为 hove/focus 时生效），不小于 mouseEnterDelay。默认值：50
  spacing?: number; //	弹出层与 children 元素的距离，单位 px。默认值：8
  defaultVisible?: boolean; //	默认是否显隐。默认值：false
  visible?: boolean; //	当trigger为custom时，通过该属性控制是否展示弹出层。默认值：false
  zIndex?: number; //	弹层层级。默认值：1060
  getContainer?: () => HTMLElement; // 渲染的父节点，默认值：document.body
  onVisibleChange?: (visible: boolean) => void; //	显示隐藏的回调。默认值：-
  onClickOutSide?: (e: Event) => void; //	当弹出层处于展示状态，点击非Children、非浮层内部区域时的回调（仅trigger为custom、click时有效）。默认值：-
} & NativeProps;

const getDefaultContainer = () => document.body;
export const Tooltip = (props: TooltipProps) => {
  const {
    prefixCls = prefix,
    showArrow = true,
    clickToHide,
    content,
    placement = 'top',
    trigger = 'hover',
    getContainer = getDefaultContainer,
    mouseEnterDelay = 50,
    mouseLeaveDelay = 50,
    spacing = 8,
    defaultVisible = false,
    zIndex = 1060,
    onClickOutSide,
    children,
    className,
    style,
  } = props;
  // 基点，基于此进行 transform 位移
  const [coords, setCoords] = useState({});
  const _timer = useRef(0);
  const triggerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // controlled
  const [visible, setVisible] = usePropsValue({
    value: props.visible,
    defaultValue: defaultVisible,
    onChange: props.onVisibleChange,
  });

  const getTriggerBounding = () => {
    let triggerDOM = triggerRef.current!;
    return triggerDOM && (triggerDOM as Element).getBoundingClientRect();
  };

  useEffect(() => {
    window.addEventListener('resize', updateCoords, false);
    return () => window.removeEventListener('resize', updateCoords, false);
  }, []);

  useEffect(() => {
    // 页面滚动条滚动时触发
    window.addEventListener('scroll', updateCoords, true);
    return () => {
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, []);

  // 基准点
  const updateCoords = () => {
    // https://zh.javascript.info/coordinates
    const rect = getTriggerBounding();
    // 根据 placement 改变基准点
    const newCoords = {
      left: rect?.left,
      top: rect?.bottom,
    };
    switch (placement) {
      case 'bottomLeft':
      case 'leftBottom':
        break;
      case 'bottom':
        newCoords.left += rect?.width / 2;
        break;
      case 'bottomRight':
      case 'rightBottom':
        newCoords.left = rect?.right;
        break;
      case 'topLeft':
      case 'leftTop':
        newCoords.top = rect?.top;
        break;
      case 'top':
        newCoords.left += rect?.width / 2;
        newCoords.top = rect?.top;
        break;
      case 'topRight':
      case 'rightTop':
        newCoords.left = rect?.right;
        newCoords.top = rect?.top;
        break;
      case 'left':
        newCoords.top -= rect?.height / 2;
        break;
      case 'right':
        newCoords.left = rect?.right;
        newCoords.top -= rect?.height / 2;
        break;
      default:
        break;
    }

    if (['topLeft', 'top', 'topRight'].includes(placement)) {
      newCoords.top -= spacing;
    }
    if (['bottomLeft', 'bottom', 'bottomRight'].includes(placement)) {
      newCoords.top += spacing;
    }
    if (['leftTop', 'left', 'leftBottom'].includes(placement)) {
      newCoords.left -= spacing;
    }
    if (['rightTop', 'right', 'rightBottom'].includes(placement)) {
      newCoords.left += spacing;
    }

    setCoords({
      left: newCoords.left + window.scrollX,
      top: newCoords.top + window.scrollY,
    });
  };

  // 根据trigger类型挂载事件
  const generateEvent = (trigger: Trigger) => {
    const triggerEventSet: { [key: string]: (e: React.MouseEvent<HTMLElement>) => void } = {};
    let portalEventSet: { [key: string]: (e: React.MouseEvent<HTMLElement>) => void } = {};
    switch (trigger) {
      case 'focus':
        triggerEventSet.onFocus = () => {
          updateCoords();
          delayShow();
        };
        triggerEventSet.onBlur = () => {
          delayHide();
        };
        portalEventSet = triggerEventSet;
        break;
      case 'click':
        triggerEventSet.onClick = () => {
          updateCoords();
          show();
        };
        portalEventSet = {};
        // Click outside needs special treatment, can not be directly tied to the trigger Element, need to be bound to the document
        break;
      case 'hover':
        triggerEventSet.onMouseEnter = () => {
          // setCache('isClickToHide', false);
          updateCoords();
          delayShow();
        };
        triggerEventSet.onMouseLeave = () => {
          delayHide();
        };

        portalEventSet = { ...triggerEventSet };
        portalEventSet.onMouseEnter = () => {
          delayShow();
        };
        if (clickToHide) {
          portalEventSet.onClick = () => {
            hide();
          };
        }
        break;
      case 'custom':
        // when trigger type is 'custom', no need to bind eventHandler
        // show/hide completely depend on props.visible which change by user
        break;
      default:
        break;
    }
    return { triggerEventSet, portalEventSet };
  };

  const delayShow = () => {
    clearDelayTimer();

    if (mouseEnterDelay > 0) {
      _timer.current = window.setTimeout(() => {
        show();
        clearDelayTimer();
      }, mouseEnterDelay);
    } else {
      show();
    }
  };

  const delayHide = () => {
    clearDelayTimer();

    if (mouseLeaveDelay > 0) {
      _timer.current = window.setTimeout(() => {
        hide();
        clearDelayTimer();
      }, mouseLeaveDelay);
    } else {
      hide();
    }
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  const clearDelayTimer = () => {
    if (_timer.current) {
      clearTimeout(_timer.current);
      _timer.current = 0;
    }
  };

  const handlePortalInnerClick = (e: React.MouseEvent) => {
    if (clickToHide) {
      hide();
    }
    if (props.stopPropagation) {
      stopPropagation(e);
    }
  };

  // 点击外部处理（TODO: 抽到公用hook）
  useEffect(() => {
    const clickOutsideHandler = (e: Event) => {
      if (!triggerRef.current?.contains(e.target as HTMLElement) && !popupRef.current?.contains(e.target as HTMLElement)) {
        onClickOutSide?.(e);
        delayHide();
      }
    };
    document.addEventListener('click', clickOutsideHandler, false);

    return () => {
      document.removeEventListener('click', clickOutsideHandler, false);
    };
  }, []);

  useEffect(() => {
    updateCoords();
  }, []);

  const wrapSpan = (elem: React.ReactNode | React.ReactElement) => {
    const blockDisplays = ['flex', 'block', 'table', 'flow-root', 'grid'];
    const display = get(elem, 'props.style.display');
    const block = get(elem, 'props.block');

    const style: React.CSSProperties = {
      display: 'inline-block',
    };

    if (block || blockDisplays.includes(display)) {
      style.width = '100%';
    }

    return <span style={style}>{elem}</span>;
  };

  const child = wrapSpan(children);

  const { triggerEventSet, portalEventSet } = generateEvent(trigger);
  const newChild = React.cloneElement(child as React.ReactElement, { ...(child as React.ReactElement).props, ...mergeEvents((child as React.ReactElement).props, triggerEventSet), ref: triggerRef });

  // 箭头元素
  const renderArrow = () => {
    const arrowCls = classNames(`${prefixCls}-arrow`);
    const bgColor = get(style, 'backgroundColor');
    const arrowStyle: React.CSSProperties = {
      color: bgColor,
      fill: 'currentColor',
    };

    if (placement.indexOf('top') === 0) {
      arrowStyle.bottom = '-6px';
    }
    if (placement.indexOf('bottom') === 0) {
      arrowStyle.top = '-6px';
    }
    if (placement.indexOf('left') === 0) {
      arrowStyle.right = '-6px';
    }
    if (placement.indexOf('right') === 0) {
      arrowStyle.left = '-6px';
    }

    if (placement.includes('Left')) {
      arrowStyle.left = '14px';
    }
    if (placement.includes('Right')) {
      arrowStyle.right = '14px';
    }
    if (placement.includes('Top')) {
      arrowStyle.top = '6px';
    }
    if (placement.includes('Bottom')) {
      arrowStyle.bottom = '6px';
    }

    if (placement === 'top' || placement === 'bottom') {
      arrowStyle.left = '50%';
      // arrowStyle.transform = ' translateX(-50%)';
    }

    if (placement === 'left' || placement === 'right') {
      arrowStyle.top = '50%';
      // arrowStyle.transform = ' translateY(-50%)';
    }

    let icon = null;
    if (showArrow) {
      if (isValidElement(showArrow)) {
        icon = showArrow;
      } else {
        const iconComponent = placement.includes('left') || placement.includes('right') ? <ArrowVertical /> : <Arrow />;
        icon = React.cloneElement(iconComponent, { className: arrowCls, style: arrowStyle });
      }
    }

    return icon;
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${placement}`]: placement,
    },
    className,
  );

  return (
    <>
      {newChild}
      {visible ? (
        <Portal getContainer={getContainer} style={{ zIndex }}>
          <div className={`${BASE_CLASS_PREFIX}-portal-inner`} style={{ ...coords, ...getTranslateStyle(placement) }} ref={popupRef}>
            <div className={cls} style={style} {...portalEventSet} onClick={handlePortalInnerClick}>
              {content}
              {renderArrow()}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
