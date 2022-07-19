import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-tag`;

const PresetColors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
const PresetStatusColors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
const PresetColorRegex = new RegExp(`^(${PresetColors.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColors.join('|')})(-inverse)?$`);

type TagSize = Size;

export type TagProps = {
  closeable?: boolean; // 标签是否可以关闭（点击默认关闭）
  closeIcon?: ReactNode; //	自定义关闭按钮
  color?: string; // 标签颜色
  textColor?: string; // 标签文本颜色
  size?: TagSize; // 标签大小
  checkable?: boolean; // 标签是否可以选中（点击默认选中）
  checked?: boolean; // 是否选中状态
  defaultChecked?: boolean; // 是否默认选中状态
  visible?: boolean; // 是否显示标签
  value?: string; // 标签的value
  onChange?: (checked: boolean) => void; //	点击标签时触发的回调
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void; // 单击标签时的回调函数
  onClose?: (value: { label: ReactNode; value: string }, event: React.MouseEvent<HTMLElement>) => void; // 关闭标签时的回调函数
} & NativeProps;

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, TagProps> = ({ size = 'middle', color, textColor, style, checkable, onChange, onClick, onClose, className, children, value, ...props }, ref) => {
  const [visible, setVisible] = useState(true);

  const [checked, setChecked] = usePropsValue({
    value: props.checked,
    defaultValue: props.defaultChecked || false,
    onChange,
  });

  React.useEffect(() => {
    if ('visible' in props) {
      setVisible(!!props.visible);
    }
  }, [props.visible]);

  const isPresetColor = (): boolean => {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    onClose?.({ label: children, value: value || '' }, e);

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Event/defaultPrevented
    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    onClick?.(event);

    if (checkable) {
      setChecked(!checked);
      onChange?.(!checked);
    }
  };

  const renderCloseIcon = () => {
    const { closeable, closeIcon } = props;
    return closeable ? (
      <span className={`${prefixCls}-close-icon`} onClick={handleCloseClick}>
        {closeIcon || `×`}
      </span>
    ) : null;
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${color}`]: isPresetColor(),
      [`${prefixCls}-checkable`]: checkable,
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-hidden`]: !visible,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );

  const getTagStyle = () => {
    if (isPresetColor()) return {};

    let style: React.CSSProperties = {};
    if (color) {
      style = {
        background: color,
        ...style,
      };
    }
    if (textColor) {
      style = {
        color: textColor,
        ...style,
      };
    }
    return style;
  };

  const tagStyle = {
    ...getTagStyle(),
    ...style,
  };

  return (
    <span className={cls} onClick={handleClick} style={tagStyle} ref={ref}>
      {children}
      {renderCloseIcon()}
    </span>
  );
};

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(InternalTag);

Tag.displayName = 'Tag';
