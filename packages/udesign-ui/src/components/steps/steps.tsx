import React, { Children, cloneElement, isValidElement, ReactElement, useMemo } from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX, Direction } from '../../constants';
import { StepStatus } from './item';
import { DividerProps } from '../divider';

const prefixCls = `${BASE_CLASS_PREFIX}-steps`;

export type StepsProps = {
  direction?: Direction; // 指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向。默认值：horizontal
  current?: number; // 指定当前步骤，从 0 开始记数。默认值：0
  initial?: number; // 起始序号，从 0 开始记数。默认值：0
  status?: StepStatus; //	指定当前步骤的状态，可选 wait、process、finish、error、warning。默认值：process
  hasLine?: boolean; // 是否显示连接线。默认值：true
  type?: string; //	步骤条类型，默认basic，可选 custom。默认值：basic
  onChange?: (current: number) => void; // 改变步骤条的回调。默认值：-
} & NativeProps &
  Pick<DividerProps, 'dashed'>;

export const Steps = ({ dashed, direction = 'horizontal', current = 0, initial = 0, status = 'process', hasLine = true, type = 'basic', onChange, className, children, style }: StepsProps) => {
  const content = useMemo(() => {
    const filteredChildren = Children.toArray(children).filter((c) => isValidElement(c)) as Array<ReactElement>;
    const content = Children.map(filteredChildren, (child: React.ReactElement, index) => {
      if (!child) {
        return null;
      }
      const stepNumber = initial + index;
      const childProps = {
        stepNumber: `${stepNumber + 1}`,
        ...child.props,
      };

      if (!child.props.status) {
        if (stepNumber === current) {
          childProps.status = status;
        } else if (stepNumber < current) {
          childProps.status = 'finish';
        } else {
          childProps.status = 'wait';
        }
      }
      childProps.dashed = dashed;
      // childProps.active = stepNumber === current;
      // childProps.done = stepNumber < current;
      childProps.onChange = () => {
        if (index !== current) {
          onChange?.(index + initial);
        }
      };
      return cloneElement(child, { ...childProps });
    });
    return content;
  }, [children, initial, prefixCls, direction, current]);

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-hasline`]: hasLine,
    },
    className,
  );

  return (
    <div className={cls} style={style}>
      {content}
    </div>
  );
};
