import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX, Size } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-tag`;

const PresetColors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
const PresetStatusColors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
const PresetColorRegex = new RegExp(`^(${PresetColors.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColors.join('|')})(-inverse)?$`);

export type TagProps = {
  closeable?: boolean; // 标签是否可以关闭（点击默认关闭）。默认值：false
  closeIcon?: ReactNode; //	自定义关闭按钮。默认值：-
  color?: string; // 标签颜色。默认值：-
  textColor?: string; // 标签文本颜色。默认值：-
  size?: Size; // 标签大小。默认值：middle
  checkable?: boolean; // 标签是否可以选中（点击默认选中）。默认值：false
  checked?: boolean; // 是否选中状态。默认值：false
  defaultChecked?: boolean; // 是否默认选中状态。默认值：false
  visible?: boolean; // 是否显示标签。默认值：false
  value?: string | number; // 标签的value。默认值：-
  onChange?: (checked: boolean) => void; //	点击标签时触发的回调。默认值：-
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void; // 单击标签时的回调函数。默认值：-
  onClose?: (value: { label: ReactNode; value: string }, event: React.MouseEvent<HTMLElement>) => void; // 关闭标签时的回调函数。默认值：-
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

    onClose?.({ label: children, value: String(value) || '' }, e);

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
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-hidden`]: !visible,
      [`${prefixCls}-checkable`]: checkable,
      [`${prefixCls}-checkable-active`]: checked,
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
