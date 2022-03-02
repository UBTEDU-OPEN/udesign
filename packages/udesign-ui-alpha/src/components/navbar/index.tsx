import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import { toArray, NativeProps } from '../../utils';
import { LeftOutlined } from '@ant-design/icons';

export type NavbarProps = {
  leftArrow?: boolean; // 是否显示左侧箭头
  left?: ReactNode; // 左侧内容
  right?: ReactNode; // 右侧内容
  border?: boolean; // 是否显示下边框
  fixed?: boolean; // 是否固定在顶部
  // placeholder?: boolean; // 固定在顶部时，是否在标签位置生成一个等高的占位元素
  onLeftClick?: () => void; // 点击左侧按钮时触发
  onRightClick?: () => void; // 点击右侧按钮时触发
} & NativeProps;

export const Navbar = ({ leftArrow = true, left, right, border, fixed, onLeftClick, onRightClick, className, children }: NavbarProps) => {
  const cls = classNames('bg-white px-3', border ? 'border-b' : '', fixed ? 'fixed left-0 right-0 top-0 z-20' : '', className);

  return (
    <>
      <div className={cls}>
        <div className='flex items-center h-12'>
          <div className='flex-1 flex items-center' onClick={onLeftClick}>
            {leftArrow ? <LeftOutlined /> : null}
            {left}
          </div>
          <div className='flex-auto px-3 text-center overflow-hidden overflow-ellipsis whitespace-nowrap text-lg'>{children}</div>
          <div className='flex-1 flex items-center justify-end text-right' onClick={onRightClick}>
            {right}
          </div>
        </div>
      </div>
      {fixed ? <div className='h-12'>placeholder</div> : null}
    </>
  );
};

Navbar.displayName = 'Navbar';
