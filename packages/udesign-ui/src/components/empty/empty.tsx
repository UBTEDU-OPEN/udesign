import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { DefaultImage } from './default-image';
import LocaleConsumer from '../locale/consumer';
import { Locale } from '../locale/interface';

const prefixCls = `${BASE_CLASS_PREFIX}-empty`;

export type EmptyProps = {
  image?: ReactNode; // 自定义图片。默认值：内置图
  description?: ReactNode; // 自定义描述。默认值：暂无数据
  imageStyle?: React.CSSProperties; // 图片样式。
} & NativeProps;

export const Empty = ({ image = <DefaultImage />, description, imageStyle, className, children, style }: EmptyProps) => {
  const cls = classNames(prefixCls, className);
  return (
    <LocaleConsumer componentName='Empty'>
      {(locale: Locale['Empty']) => {
        const des = typeof description !== 'undefined' ? description : locale.description;
        const alt = typeof des === 'string' ? des : 'empty';

        let imageNode: React.ReactNode = null;

        if (typeof image === 'string') {
          imageNode = <img alt={alt} src={image} />;
        } else {
          imageNode = image;
        }

        return (
          <div className={cls} style={style}>
            {image ? (
              <div className={`${prefixCls}-image`} style={imageStyle}>
                {imageNode}
              </div>
            ) : null}
            {des ? <div className={`${prefixCls}-description`}>{des}</div> : null}
            {children ? <div className={`${prefixCls}-footer`}>{children}</div> : null}
          </div>
        );
      }}
    </LocaleConsumer>
  );
};

Empty.displayName = 'Empty';
