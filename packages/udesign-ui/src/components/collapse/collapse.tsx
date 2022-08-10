import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { DownOutlined } from '@ubt/udesign-icons';
import CollapseContext from './context';
import { NativeProps, usePropsValue } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-collapse`;

type CollapseProps = {
  accordion?: boolean; // 手风琴。默认值：false
  bordered?: boolean; // 是否显示边框。默认值：false
  showArrow?: boolean; // 是否展示当前面板上的箭头。默认值：true
  expandIcon?: ReactNode; // 自定义展开图标。默认值：<DownOutlined />
  headerStyle?: object; // header自定义样式。默认值：-
  bodyStyle?: object; // body自定义样式。默认值：-
  radius?: boolean; // 这是圆角。默认值：false
  activeKey?: string | number | string[] | number[]; // 当前展开时的name。默认值: -
  defaultActiveKey?: string | number | string[] | number[]; // 默认展开的name。默认值: -
  onChange?: (activeKey: string | number | string[] | number[]) => void; // 展开/收起时的回调。默认值：-
} & NativeProps;

export const Collapse = ({ accordion = false, radius, bordered, expandIcon = <DownOutlined />, headerStyle, bodyStyle, children, onChange, style, className, ...props }: CollapseProps) => {
  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-radius`]: radius,
    },
    className,
  );
  const [activeKey, setActiveKey] = usePropsValue({
    value: props.activeKey,
    defaultValue: props.defaultActiveKey ?? '',
    onChange,
  });
  const onClick = (name: string | number, active: boolean) => {
    // 通过判断点击前所处的active的状态，来判断本次点击是否折叠或展开
    if (active) {
      setActiveKey('');
    } else {
      setActiveKey(name);
      console.log(2);
    }
  };

  return (
    <>
      <CollapseContext.Provider
        value={{
          expandIcon,
          accordion,
          activeKey,
          headerStyle,
          bodyStyle,
          onClick,
        }}
      >
        <div className={cls} style={style}>
          {children}
        </div>
      </CollapseContext.Provider>
    </>
  );
};

Collapse.displayName = 'Collapse';
