import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { DownOutlined } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse-item`;
export type ItemProps = {
  title: string; // 标题
  description?: string; //
  name: string; // 唯一标识符
  active?: boolean; // 是否展开
  bordered?: boolean; // 是否显示边框
  disabled?: boolean; // 是否禁用
  showArrow?: boolean; // 是否展示当前面板上的箭头
  expandIcon?: ReactNode; // 自定义图标
  headerStyle?: object; // header自定义样式
  bodyStyle?: object; // body自定义样式
  onItemClick?: (name: string, e: React.MouseEvent<HTMLDivElement>) => void;
} & NativeProps;

export const Item = ({ title, description, active, disabled, bordered, name, className, headerStyle, bodyStyle, showArrow = true, expandIcon, onItemClick, children, ...restProps }: ItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    onItemClick?.(name, e);
  };
  const iconElement = expandIcon || <DownOutlined />;

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-border`]: bordered,
      [`${prefixCls}-inactive`]: !active,
    },
    className,
  );
  return (
    <>
      <div className={cls} {...restProps}>
        <div className={`${prefixCls}-header`} onClick={handleClick} style={headerStyle}>
          {title}
          {showArrow ? <div className={`${prefixCls}-icon`}>{iconElement}</div> : null}
        </div>
        {children ? (
          <div className={`${prefixCls}-content`} style={bodyStyle}>
            {children}
          </div>
        ) : null}
      </div>
    </>
  );
};

Item.displayName = 'Collapse.Item';
