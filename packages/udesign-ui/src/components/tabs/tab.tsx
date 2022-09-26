import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import TabsContext from './context';

const prefixCls = `${BASE_CLASS_PREFIX}-tabs`;

export type TabProps = {
  name: string; // 用于匹配的标识符。默认值：-
  label: ReactNode; // 对外显示。默认值：-
  disabled?: boolean; // 是否禁用。默认值：false
  onClick?: (name: string) => void; // 点击tab触发。默认值：-
} & NativeProps;

export const Tab = ({ name, label, disabled, onClick, className, style }: TabProps) => {
  const { size, position, onInnerClick, active } = useContext(TabsContext);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onClick?.(name);
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
      <li className={cls} onClick={handleClick} key={name} style={style}>
        {label}
      </li>
    </>
  );
};

Tab.displayName = 'Tabs.Tab';
