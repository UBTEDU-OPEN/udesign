import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, InfoCircleFilled } from '@ubt/udesign-icons';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Status } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-result`;

export type ResultProps = {
  icon?: ReactNode; // 自定义 icon。默认值：-
  status?: Status | '404' | '403' | '500'; // 结果的状态，决定图标和颜色。默认值：normal
  title?: ReactNode; // 标题文字。默认值：-
  subtitle?: ReactNode; // 副标题文字。默认值：-
} & NativeProps;

export const Result = ({ icon, status = 'normal', title, subtitle, children, className, style }: ResultProps) => {
  const renderIcon = () => {
    const iconNode = () => {
      if (icon) return icon;
      if (status === 'success') return <CheckCircleFilled />;
      if (status === 'error') return <CloseCircleFilled />;
      if (status === 'warning') return <ExclamationCircleFilled />;
      if (status === '403') return <ExclamationCircleFilled />;
      if (status === '404') return <ExclamationCircleFilled />;
      if (status === '500') return <ExclamationCircleFilled />;
      return <InfoCircleFilled />;
    };

    const cls = classNames(`${prefixCls}-icon`, {
      [`${prefixCls}-icon-${status}`]: status,
    });
    return <div className={cls}>{iconNode()}</div>;
  };

  const renderTitle = () => (title ? <div className={`${prefixCls}-title`}>{title}</div> : null);

  const renderSubtitle = () => (subtitle ? <div className={`${prefixCls}-subtitle`}>{subtitle}</div> : null);

  const renderChildren = () => (children ? <div className={`${prefixCls}-extra`}>{children}</div> : null);

  const cls = classNames(prefixCls, className);
  return (
    <div className={cls} style={style}>
      {renderIcon()}
      {renderTitle()}
      {renderSubtitle()}
      {renderChildren()}
    </div>
  );
};

Result.displayName = 'Result';
