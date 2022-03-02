import React from 'react';
import classNames from 'classnames';
import { Cell, CellProps } from '../cell';

export interface ItemProps extends Omit<CellProps, 'url' | 'to' | 'arrow'> {
  name: string; // 唯一标识符
  active?: boolean; // 是否展开
  onItemClick?: (name: string, e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Item = ({ active, disabled, name, className, onItemClick, children, ...restProps }: ItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onItemClick?.(name, e);
  };

  const cls = classNames('overflow-hidden', active ? '' : 'h-0', className);

  return (
    <>
      <Cell border={active} arrow={true} disabled={disabled} arrowDirection={active ? 'up' : 'down'} {...restProps} onClick={handleClick} />
      <div className={cls}>{children}</div>
    </>
  );
};

Item.displayName = 'Collapse.Item';
