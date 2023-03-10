import React, { isValidElement, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import { CheckOutlined, CloseOutlined, InfoCircleOutlined } from '@ubt/udesign-icons';
import Divider, { DividerProps } from '../divider';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-steps-item`;

export type StepStatus = 'wait' | 'process' | 'finish' | 'error' | 'warning';

export type StepProps = {
  description?: ReactNode; // 步骤的详情描述，可选。默认值：-
  icon?: ReactNode; // 步骤图标的类型，可选。默认值：-
  status?: StepStatus; // 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。。默认值：-
  title?: ReactNode; // 标题。默认值：-
  stepNumber?: string; // 内部尺码。默认值：-
  onChange?: () => void; // 改变步骤条的回调。默认值：-
  onClick?: MouseEventHandler<HTMLDivElement>; // 点击步骤条的回调。默认值：-
} & NativeProps &
  Pick<DividerProps, 'dashed'>;

export const Item = (props: StepProps) => {
  const { dashed, icon, title, description, status, stepNumber, className, onClick, onChange, ...restProps } = props;

  const renderIcon = () => {
    let inner;

    if ('icon' in props) {
      if (isValidElement(icon)) {
        inner = icon;
      }
    } else if ('status' in props) {
      switch (status) {
        case 'finish':
          inner = <CheckOutlined />;
          break;
        case 'process':
          inner = <span className={`${prefixCls}-icon-number`}>{stepNumber}</span>;
          break;
        case 'error':
          inner = <CloseOutlined />;
          break;
        case 'wait':
        default:
          inner = <span className={`${prefixCls}-icon-number`}>{stepNumber}</span>;
          break;
      }
    }

    const cls = classNames({
      [`${prefixCls}-icon`]: true,
      [`${prefixCls}-icon-${status}`]: status,
    });

    return inner ? <span className={cls}>{inner}</span> : null;
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    onChange?.();
  };

  const cls = classNames(prefixCls, className, {
    [`${prefixCls}-${status}`]: status,
  });

  return (
    <div className={cls} {...restProps} onClick={handleClick}>
      <Divider dashed={dashed} orientation='left' orientationMargin={0}>
        <div className={`${prefixCls}-wrapper`}>
          {renderIcon()}
          <div className={`${prefixCls}-content`}>
            <div className={`${prefixCls}-title`}>{title}</div>
            {description && <div className={`${prefixCls}-description`}>{description}</div>}
          </div>
        </div>
      </Divider>
    </div>
  );
};

Item.displayName = 'Steps.Item';
