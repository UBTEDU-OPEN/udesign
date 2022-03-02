import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';
import { Position } from '../../constants';

export type TabType = 'line' | 'card' | 'button' | 'switch';

const getTypeClass = (type: TabType, position: Position, active: boolean) => {
  let cls = '';
  switch (type) {
    case 'line':
      cls = classNames('py-2', position === 'top' ? 'border-b-2' : position === 'bottom' ? 'border-t-2' : position === 'left' ? 'border-r-2' : position === 'right' ? 'border-l-2' : '', active ? 'border-indigo-600 text-indigo-600' : 'border-transparent');
      break;

    case 'card':
      cls = classNames('px-5 py-2', position === 'top' ? 'rounded-t-lg' : position === 'bottom' ? 'rounded-b-lg' : position === 'left' ? 'rounded-l-lg' : position === 'right' ? 'rounded-r-lg' : '', active ? 'bg-indigo-600 text-white' : 'bg-gray-100');
      break;

    case 'button':
      cls = classNames('px-5 py-2 rounded', active ? 'bg-indigo-600 text-white' : 'bg-gray-100');
      break;

    case 'switch':
      cls = classNames('px-5 py-2 rounded-full', active ? 'bg-white border' : 'text-gray-400 border border-transparent');
      break;
  }
  return cls;
};

export type TabProps = {
  name: string; // 用于匹配的标识符
  label: ReactNode; // 对外显示
  disabled?: boolean; // 是否禁用
  type?: TabType; // 样式
  position?: Position;
  active?: boolean; // 当前选中
  onInnerClick?: (name: string) => void; // 点击tab触发
} & NativeProps;

export const Tab = ({ name, label, disabled, type = 'line', position = 'top', active, onInnerClick, className }: TabProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    onInnerClick?.(name);
    (e.target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  };

  const cls = classNames('flex items-center justify-center shrink-0', getDisabledCls(disabled, 'cursor-pointer'), getTypeClass(type, position, Boolean(active)), className);

  return (
    <>
      <li className={cls} onClick={handleClick} key={name}>
        {label}
      </li>
    </>
  );
};

Tab.displayName = 'Tabs.Tab';
