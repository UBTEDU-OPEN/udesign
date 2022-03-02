import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps, route } from '../../utils';
import { Badge } from '../badge';
import { Wrapper } from '../_wrapper';

export type ItemProps = {
  name: string; // 对应 activeKey
  icon?: ReactNode; // 图标
  title?: string; // 标题
  badge?: ReactNode; // 徽标，同 badge content
  active?: boolean; // 当前选中
  url?: string; // 点击后跳转的链接地址
  to?: string; // 点击后跳转的目标路由对象
  onItemClick?: (name: string) => void; // 点击tab触发
} & NativeProps;

export const Item = ({ name, icon, title, badge, active, url, to, onItemClick, className }: ItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onItemClick?.(name);
    (e.target as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    route({ url, to });
  };

  const renderContent = () => (
    <div className='flex flex-1 flex-col items-center justify-center'>
      {icon}
      <div>{title}</div>
    </div>
  );

  const cls = classNames('flex flex-1 items-center justify-center shrink-0 px-5 py-2', active ? 'text-indigo-600' : '', className);

  return (
    <>
      <li className={cls} onClick={handleClick} key={name}>
        <Wrapper if={badge} with={(v) => <Badge content={badge}>{v}</Badge>}>
          {renderContent()}
        </Wrapper>
      </li>
    </>
  );
};

Item.displayName = 'Tabbar.Item';
