import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { DownOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import { getDisabledCls, NativeProps, route } from '../../utils';
import { Direction } from '../../constants';

export type CellProps = {
  title?: string;
  description?: string;
  prefix?: ReactNode; // 左侧内容
  extra?: ReactNode; // 右侧内容
  disabled?: boolean; // 是否禁用
  center?: boolean; // 是否使内容垂直居中
  arrow?: boolean; // 右侧是否显示箭头图标
  arrowDirection?: Direction;
  url?: string; // 点击后跳转的链接地址
  to?: string; // 点击后跳转的目标路由对象
  border?: boolean; // 是否显示内边框
  round?: boolean; // 是否圆形
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; // 点击单元格时触发
} & NativeProps;

const getArrowIcon = (direction: Direction) => {
  let elm = null;
  switch (direction) {
    case 'right':
      elm = <RightOutlined className='pl-3 text-gray-400' />;
      break;
    case 'up':
      elm = <UpOutlined className='pl-3 text-gray-400' />;
      break;
    case 'down':
      elm = <DownOutlined className='pl-3 text-gray-400' />;
      break;
  }
  return elm;
};

export const Cell = ({ title, description, prefix, extra, disabled = false, center = true, arrow, arrowDirection = 'right', url, to, border = true, onClick, className, children, ...restProps }: CellProps) => {
  const cls = classNames('px-3 py-3 flex', getDisabledCls(disabled, arrow ? 'cursor-pointer active:bg-gray-100' : ''), center ? 'items-center' : 'items-start', border ? 'border-b last:border-0' : '', className);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    route({ url, to });
  };

  return (
    <>
      <div className={cls} onClick={handleClick} {...restProps}>
        {prefix ? prefix : null}
        <div className='flex-1'>
          {children ? (
            children
          ) : (
            <>
              <div className='text-gray-900'>{title}</div>
              {description ? <div className='text-sm text-gray-400 mt-1'>{description}</div> : null}
            </>
          )}
        </div>
        {extra ? <div className='text-right'>{extra}</div> : null}
        {arrow ? getArrowIcon(arrowDirection) : null}
      </div>
    </>
  );
};

Cell.displayName = 'Cell';
