import React, { useEffect, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { CommonType, CommonSize, CommonShape } from '../../constants';

const prefixCls = `ud-tag`;

export type TagSize = CommonSize;
export type TagType = CommonType;
export type TagShape = CommonShape;

export type TagProps = {
  size?: TagSize; // 设置大小
  shape?: TagShape; // 形状
  type?: TagType; // 样式
  color?: string; // 自定义标签颜色
  textColor?: string; // 自定义文本颜色
  closeable?: boolean; // 是否为可关闭标签
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void; // 单击标签时的回调函数
  onClose?: (value: ReactNode, event: React.MouseEvent<HTMLElement>) => void; // 关闭标签时的回调函数
} & NativeProps;

export const Tag = (props: TagProps) => {
  const { type = 'default', size = 'middle', shape = 'default', closeable, color, textColor, style, onClick, onClose, className, children } = props;
  const [visible, setVisible] = useState(true);

  const getTagStyle = () => {
    let stl = {};
    if (color) {
      stl = {
        background: color,
        ...stl,
      };
    }
    if (textColor) {
      stl = {
        color: textColor,
        ...stl,
      };
    }
    return stl;
  };

  const tagStyle = {
    ...getTagStyle(),
    ...style,
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setVisible(false);
    onClose?.(children, e);
  };

  const getTypeCls = (type: TagType) => `${prefixCls}-${type}`;
  const getSizeCls = (size: TagSize) => `${prefixCls}-${size}`;
  const getShapeCls = (shape: TagShape) => `${prefixCls}-${shape}`;

  const cls = classNames(prefixCls, getTypeCls(type), getSizeCls(size), getShapeCls(shape), className);

  return (
    <>
      {visible ? (
        <span className={cls} onClick={onClick} style={tagStyle}>
          {children}
          {closeable ? (
            <span className={`${prefixCls}-close`} onClick={handleClose}>
              ×
            </span>
          ) : null}
        </span>
      ) : null}
    </>
  );
};

Tag.displayName = 'Tag';
