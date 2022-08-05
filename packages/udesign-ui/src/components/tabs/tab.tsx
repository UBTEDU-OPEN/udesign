import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { Position, BASE_CLASS_PREFIX } from '../../constants';

export type TabType = 'line' | 'card' | 'button' | 'switch';
const prefixCls = `${BASE_CLASS_PREFIX}-tabs`;

export type TabProps = {
  name: string; // 用于匹配的标识符。默认值：-
  label: ReactNode; // 对外显示。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  size?: string; // 大小。默认值：middle
  type?: TabType; // 样式 line | card | button | switch。默认值：line
  position?: Position;
  active?: boolean; // 当前选中。默认值：false
  onInnerClick?: (name: string) => void; // 点击tab触发。默认值：-
} & NativeProps;

export const Tab = ({ name, label, disabled, type = 'line', position = 'top', size = 'middle', active, onInnerClick, className }: TabProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onInnerClick?.(name);
    (e.target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  };

  const cls = classNames(
    `${prefixCls}-tab-${size}`,
    `${prefixCls}-tab`,
    {
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-inactive`]: !active,
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
  );

  return (
    <>
      <li className={cls} onClick={handleClick} key={name}>
        {label}
      </li>
    </>
  );
};

Tab.displayName = 'Tabs.Tab';
