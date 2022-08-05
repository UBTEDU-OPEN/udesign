import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { DefaultImage } from './default-image';
import LocaleConsumer from '../locale/consumer';
import { Locale } from '../locale/interface';

const prefixCls = `${BASE_CLASS_PREFIX}-empty`;

export type EmptyProps = {
  image?: ReactNode; // 自定义图片。默认值：<DefaultImage />
  description?: ReactNode; // 自定义描述。默认值：-
} & NativeProps;

export const Empty = ({ image = <DefaultImage />, description, className, ...props }: EmptyProps) => {
  const cls = classNames(prefixCls, className);
  return (
    <LocaleConsumer componentName='Empty'>
      {(locale: Locale['Empty']) => (
        <div className={cls} {...props}>
          <div className={`${prefixCls}-image`}>{image}</div>
          <div className={`${prefixCls}-description`}>{description || locale.description}</div>
        </div>
      )}
    </LocaleConsumer>
  );
};

Empty.displayName = 'Empty';
