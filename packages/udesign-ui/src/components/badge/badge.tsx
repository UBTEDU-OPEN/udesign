import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { isNumber } from 'lodash';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';

const prefixCls = `${BASE_CLASS_PREFIX}-badge`;

export type BadgeSize = 'middle' | 'small';

export type BadgeProps = {
  content?: ReactNode; // 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏。默认值：-
  dot?: boolean; // 不展示数字，只有一个小红点。默认值：false
  overflowCount?: number | string; // 展示封顶的数字值。默认值：99
  showZero?: boolean; // 当数值为 0 时，是否展示 Badge。默认值：false
  size?: BadgeSize; // 大小，默认 middle，可选 small。默认值：middle
  title?: string; // 设置鼠标放在状态点上时显示的文字。默认值：-
} & NativeProps;

export const Badge = (props: BadgeProps) => {
  const { content, dot, overflowCount = 99, title, children } = props;

  const getTitle = () => {
    if (title) return title;

    let result;
    if (React.isValidElement(content)) {
      result = undefined;
    } else if (typeof content === 'number') {
      result = String(content);
    } else if (typeof content === 'string') {
      result = content;
    }
    return result;
  };

  const getContent = () => {
    if (isNumber(Number(content))) {
      return overflowCount && Number(content) > Number(overflowCount) ? `${overflowCount}+` : content;
    }
    return content;
  };

  const renderContent = () => {
    const { size = 'middle', showZero, className, style } = props;
    const cls = classNames(
      `${prefixCls}-content`,
      {
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-hidden`]: getContent() === 0 && !showZero,
      },
      className,
    );
    return (
      <span className={cls} title={getTitle()} style={style}>
        {getContent()}
      </span>
    );
  };

  const renderDot = () => {
    const { className, style } = props;
    const cls = classNames(`${prefixCls}-dot`, className);
    return <span className={cls} title={getTitle()} style={style}></span>;
  };

  const cls = classNames(`${prefixCls}`, {
    [`${prefixCls}-wrapper`]: children,
  });
  return (
    <span className={cls}>
      {children}
      {dot ? renderDot() : renderContent()}
    </span>
  );
};

Badge.displayName = 'Badge';
