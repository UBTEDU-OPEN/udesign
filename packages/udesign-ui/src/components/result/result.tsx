import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import InfoIcon from './info';
import SuccessIcon from './success';
import WarningIcon from './warning';
import Icon403 from './403';
import Icon404 from './404';
import Icon500 from './500';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-result`;

export type ResultProps = {
  icon?: ReactNode; // 自定义 icon
  status?: 'success' | 'info' | 'warning' | '404' | '403' | '500'; // 结果的状态，决定图标和颜色，默认info
  title?: ReactNode; // 标题文字
  subtitle?: ReactNode; // 副标题文字
} & NativeProps;

export const Result = ({ icon, status = 'info', title, subtitle, children, className, style }: ResultProps) => {
  const renderIcon = () => {
    if (icon) return icon;

    if (status === 'success') return <SuccessIcon />;
    if (status === 'warning') return <WarningIcon />;
    if (status === '403') return <Icon403 />;
    if (status === '404') return <Icon404 />;
    if (status === '500') return <Icon500 />;
    return <InfoIcon />;
  };

  const cls = classNames(prefixCls, className);
  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}-icon`}>{renderIcon()}</div>
      <div>
        {title ? <h4 className={`${prefixCls}-title`}>{title}</h4> : null}
        {subtitle ? <div className={`${prefixCls}-subtitle`}>{subtitle}</div> : null}
        {children ? <div className={`${prefixCls}-extra`}>{children}</div> : null}
      </div>
    </div>
  );
};

Result.displayName = 'Result';
