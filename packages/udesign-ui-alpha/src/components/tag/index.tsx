import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';
import { PresetColors, CommonType, CommonSize } from '../../constants';
import { NativeProps } from '../../utils';
import { ArrowRightIcon } from '../icon';

type TagSize = CommonSize;
type TagType = CommonType;

// // 默认配色
// const DefaultColor = '#eee';
// const DefaultTextColor = '#999';

export const getTagSizeClass = (size: TagSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'px-2 py-1.5 text-base';
      break;

    case 'middle':
      cls = 'px-1.5 py-1 text-sm';
      break;

    case 'small':
      cls = 'px-1 py-0.5 text-xs';
      break;
  }
  return cls;
};

export const getTagTypeClass = (type: TagType = 'default', plain: boolean | undefined) => {
  let cls;
  switch (type) {
    case 'default':
      cls = plain ? 'border border-gray-300 text-gray-600' : 'bg-gray-100 text-gray-600';
      break;

    case 'primary':
      cls = plain ? 'border border-indigo-500 text-indigo-500' : 'bg-indigo-500 text-white';
      break;

    case 'success':
      cls = plain ? 'border border-green-500 text-green-500' : 'bg-green-500 text-white';
      break;

    case 'danger':
      cls = plain ? 'border border-red-500 text-red-500' : 'bg-red-500 text-white';
      break;

    case 'warning':
      cls = plain ? 'border border-yellow-500 text-yellow-500' : 'bg-yellow-500 text-white';
      break;
  }
  return cls;
};

export type TagProps = {
  size?: TagSize; // 设置大小
  type?: TagType; // 样式
  plain?: boolean; // 是否为空心样式
  round?: boolean; // 是否为圆角样式
  mark?: boolean; // 是否为标记样式
  color?: string; // 自定义标签颜色
  textColor?: string; // 自定义文本颜色
  closeable?: boolean; // 是否为可关闭标签
  linkable?: boolean; // 是否为可跳转标签
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void; // 单击标签时的回调函数
  onClose?: (value: ReactNode, event: React.MouseEvent<HTMLElement>) => void; // 关闭标签时的回调函数
} & NativeProps;

export const Tag = ({ size = 'middle', type = 'default', plain, round, mark, closeable, linkable, color, textColor, style, onClick, onClose, className, children }: TagProps) => {
  const [visible, setVisible] = useState(true);

  const cls = classNames(getTagSizeClass(size), type ? getTagTypeClass(type, plain) : 'text-white', round ? 'rounded-full' : mark ? 'rounded-r-full' : 'rounded-sm', className);

  // const getTagStyle = () => {
  //   if (type) return;
  //   let stl = {};
  //   // 都不指定时使用默认色
  //   if (!color && !textColor) {
  //     stl = {
  //       background: DefaultColor,
  //       color: DefaultTextColor,
  //     };
  //   }
  //   if (color) {
  //     stl = {
  //       background: color,
  //       ...stl,
  //     };
  //   }
  //   if (textColor) {
  //     stl = {
  //       color: textColor,
  //       ...stl,
  //     };
  //   }
  //   return stl;
  // };

  // const tagStyle = {
  //   ...getTagStyle(),
  //   ...style,
  // };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setVisible(false);
    onClose?.(children, e);
  };

  return (
    <>
      {visible ? (
        <span className={cls} onClick={onClick} style={style}>
          {children}
          {closeable ? <CloseOutlined className='cursor-pointer ml-1 align-middle' onClick={handleClose} /> : null}
          {linkable ? <ArrowRightIcon className='cursor-pointer ml-1 align-middle' onClick={handleClose} /> : null}
        </span>
      ) : null}
    </>
  );
};

Tag.displayName = 'Tag';
