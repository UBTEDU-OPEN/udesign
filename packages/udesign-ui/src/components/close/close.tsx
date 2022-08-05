import React from 'react';
import Button from '../button';
import { CloseIcon } from './close-icon';

export type CloseProps = {
  onClick: (e: React.MouseEvent) => void; // 关闭时的回调。默认值：-
};

export const Close = (props: CloseProps) => {
  const { onClick } = props;
  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e);
  };
  return <Button size='small' type='link' onClick={handleClick} icon={<CloseIcon />} />;
};
