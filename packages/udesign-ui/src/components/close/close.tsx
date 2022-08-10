import React from 'react';
import classNames from 'classnames';
import Button from '../button';
import { CloseIcon } from './close-icon';
import { NativeProps } from '../../utils';

export type CloseProps = {
  onClick: (e: React.MouseEvent) => void; // 关闭时的回调。默认值：-
} & NativeProps;

export const Close = (props: CloseProps) => {
  const { onClick, className, style } = props;
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
  };
  const cls = classNames('', className);
  return <Button className={cls} style={style} size='small' type='link' onClick={handleClick} icon={<CloseIcon />} />;
};
