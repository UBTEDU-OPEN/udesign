import React, { isValidElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { get } from 'lodash';
import { Arrow } from './arrow';
import { mergeEvents, NativeProps, usePropsValue } from '../../utils';
import { Placement, Trigger } from '../../constants';
import { Portal } from '../_portal';
import { ArrowVertical } from './arrow-vertical';

export const getPlacementCls = (placement: Placement) => {
  let cls;
  switch (placement) {
    case 'topLeft': // 上左角
      cls = '-translate-y-full';
      break;
    case 'top': // 上中
      cls = '-translate-y-full -translate-x-1/2';
      break;
    case 'topRight': // 上右角
      cls = '-translate-y-full -translate-x-full';
      break;
    case 'bottomLeft': // 下左角
      cls = '';
      break;
    case 'bottom': // 下中
      cls = '-translate-x-1/2';
      break;
    case 'bottomRight': // 下右角
      cls = '-translate-x-full';
      break;
    case 'leftTop': // 左上角
      cls = '-translate-x-full';
      break;
    case 'left': // 左中
      cls = '-translate-x-full -translate-y-1/2';
      break;
    case 'leftBottom': // 左下角
      cls = '-translate-x-full -translate-y-full';
      break;
    case 'rightTop': // 右上角
      cls = '';
      break;
    case 'right': // 右中
      cls = '-translate-y-1/2';
      break;
    case 'rightBottom': // 右下角
      cls = '-translate-y-full';
      break;
  }
  return cls;
};

export type TooltipProps = {
  showArrow?: boolean; // 是否显示箭头
  content?: React.ReactNode; // 弹出层的内容
  placement?: Placement; // 弹出层的位置
  trigger?: Trigger; // 触发下拉的行为, 移动端不支持 hover
  getContainer?: () => HTMLElement; // 渲染的父节点，默认 document.body
  mouseEnterDelay?: number; //	鼠标移入后，延迟显示的时间，单位毫秒（仅当 trigger 为 hover/focus 时生效
  mouseLeaveDelay?: number; //	鼠标移出后，延迟消失的时间，单位毫秒（仅当 trigger 为 hove/focus 时生效），不小于 mouseEnterDelay
  spacing?: number; //	弹出层与 children 元素的距离，单位 px
  defaultVisible?: boolean; //	默认是否显隐
  visible?: boolean; //	当trigger为custom时，通过该属性控制是否展示弹出层
  clickTriggerToHide?: boolean; //点击trigger时关闭
  zIndex?: number; //	弹层层级
  onVisibleChange?: (visible: boolean) => void; //	显示隐藏的回调
  onClickOutSide?: (e: Event) => void; //	当弹出层处于展示状态，点击非Children、非浮层内部区域时的回调（仅trigger为custom、click时有效）
} & NativeProps;

const getDefaultContainer = () => document.body;
export const Tooltip = ({
  showArrow = true,
  content,
  placement = 'top',
  trigger = 'hover',
  getContainer = getDefaultContainer,
  mouseEnterDelay = 50,
  mouseLeaveDelay = 50,
  spacing = 8,
  defaultVisible = false,
  children,
  className,
  style,
  ...restProps
}: TooltipProps) => {
  const [coords, setCoords] = useState({}); // 基点，基于此进行 transform 位移
  const _timer = useRef(0);
  const triggerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // controled
  const [visible, setVisible] = usePropsValue({
    value: restProps.visible,
    defaultValue: defaultVisible,
    onChange: restProps.onVisibleChange,
  });

  // 基准点
  const updateCoords = (e: React.SyntheticEvent<HTMLElement>) => {
    // https://zh.javascript.info/coordinates
    // const rect = (e.target as HTMLElement).getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();

    // 根据 placement 改变基准点
    const newCoords = {
      left: rect.left,
      top: rect.bottom,
    };
    switch (placement) {
      case 'bottomLeft':
      case 'leftBottom':
        break;
      case 'bottom':
        newCoords.left += rect.width / 2;
        break;
      case 'bottomRight':
      case 'rightBottom':
        newCoords.left = rect.right;
        break;
      case 'topLeft':
      case 'leftTop':
        newCoords.top = rect.top;
        break;
      case 'top':
        newCoords.left += rect.width / 2;
        newCoords.top = rect.top;
        break;
      case 'topRight':
      case 'rightTop':
        newCoords.left = rect.right;
        newCoords.top = rect.top;
        break;
      case 'left':
        newCoords.top -= rect.height / 2;
        break;
      case 'right':
        newCoords.left = rect.right;
        newCoords.top -= rect.height / 2;
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
        triggerEventSet.onFocus = (e: React.MouseEvent<HTMLElement>) => {
          updateCoords(e);
          delayShow();
        };
        triggerEventSet.onBlur = () => {
          delayHide();
        };
        portalEventSet = triggerEventSet;
        break;
      case 'click':
        triggerEventSet.onClick = (e: React.MouseEvent<HTMLElement>) => {
          updateCoords(e);
          show();
        };
        portalEventSet = {};
        // Click outside needs special treatment, can not be directly tied to the trigger Element, need to be bound to the document
        break;
      case 'hover':
        triggerEventSet.onMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
          // setCache('isClickToHide', false);
          updateCoords(e);
          delayShow();
        };
        triggerEventSet.onMouseLeave = () => {
          delayHide();
        };

        portalEventSet = { ...triggerEventSet };
        portalEventSet.onMouseEnter = () => {
          // setCache('isClickToHide', false);
          delayShow();
        };

        // if (getProp('clickToHide')) {
        //   portalEventSet.onClick = () => {
        //     // setCache('isClickToHide', true);
        //     hide();
        //   };

        //   portalEventSet.onMouseEnter = () => {
        //     if (getCache('isClickToHide')) {
        //       return;
        //     }

        //     delayShow();
        //   };
        // }
        break;
      case 'custom':
        // when trigger type is 'custom', no need to bind eventHandler
        // show/hide completely depond on props.visible which change by user
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

  // 点击外部处理
  useEffect(() => {
    const clickOutsideHandler = (e: Event) => {
      if ((!triggerRef.current?.contains(e.target as HTMLElement) && !popupRef.current?.contains(e.target as HTMLElement)) || restProps.clickTriggerToHide) {
        restProps.onClickOutSide?.(e);
        delayHide();
      }
    };
    document.addEventListener('click', clickOutsideHandler, false);

    return () => {
      document.removeEventListener('click', clickOutsideHandler, false);
    };
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
    const arrowCls = classNames('absolute text-gray-800', {
      'rotate-180': placement.indexOf('bottom') === 0 || placement.indexOf('right') === 0,
      '-translate-x-1/2': placement === 'top' || placement === 'bottom',
      '-translate-y-1/2': placement === 'left' || placement === 'right',
    });
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
      arrowStyle.left = '6px';
    }
    if (placement.includes('Right')) {
      arrowStyle.right = '6px';
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

  const cls = classNames('absolute w-max max-w-xs rounded-md', getPlacementCls(placement), className ? className : 'p-2 bg-gray-800 text-white');

  return (
    <>
      {newChild}
      {visible ? (
        <Portal getContainer={getContainer}>
          <div className={cls} style={{ ...style, ...coords }} {...restProps} {...portalEventSet} ref={popupRef}>
            {content}
            {renderArrow()}
          </div>
        </Portal>
      ) : null}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
