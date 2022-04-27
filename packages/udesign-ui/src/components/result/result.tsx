import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import imgInfo from './img/img_info.svg';
import imgSuccess from './img/img_success.svg';
import imgWarning from './img/icon_warning.svg';
import img403 from './img/icon_403.svg';
import img404 from './img/img_404.svg';
import img500 from './img/icon_500.svg';

const prefixCls = 'ud-result';

export type ResultProps = {
  icon?: string; // 自定义 icon
  status?: 'success' | 'info' | 'warning' | '404' | '403' | '500'; // 结果的状态，决定图标和颜色
  title?: ReactNode; //title 文字
  subTitle?: ReactNode; // subTitle 文字
  extra?: ReactNode; //操作区
} & NativeProps;

export const Result = ({ icon, status = 'info', title, subTitle, extra, className, style }: ResultProps) => {
  const cls = classNames(prefixCls, {}, className);

  const imgIcon = () => {
    if (status === 'success') return imgSuccess;
    else if (status === 'warning') return imgWarning;
    else if (status === '404') return img404;
    else if (status === '403') return img403;
    else if (status === '500') return img500;
    else return imgInfo;
  };

  return (
    <div className={cls} style={style}>
      <div className={`${prefixCls}-icon`}><img src={icon || imgIcon()} alt='' /></div>
      <div>
        {title ? <h4 className={`${prefixCls}-title`}>{title}</h4> : null}
        {subTitle ? <div className={`${prefixCls}-sub-title`}>{subTitle}</div> : null}
        {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
      </div>
    </div>
  );
};

Result.displayName = 'Result';
