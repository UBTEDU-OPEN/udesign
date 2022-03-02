import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { LoadingIcon } from '../icon';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants';
import { Wrapper } from '../_wrapper';

export type SpinSize = CommonSize;

const getSizeClass = (size: SpinSize) => {
  let cls;
  switch (size) {
    case 'large':
      cls = 'text-5xl';
      break;

    case 'small':
      cls = 'text-xl';
      break;

    default:
      cls = 'text-3xl';
      break;
  }
  return cls;
};

export type SpinProps = {
  tip?: ReactNode; // 提示文案
  indicator?: ReactNode; // 指定指示器
  size?: SpinSize;
} & NativeProps;

export const Spin = ({ tip, indicator, size = 'middle', className, children, ...restProps }: SpinProps) => {
  const hasWrapper = tip || children;

  return (
    <>
      <Wrapper
        if={hasWrapper}
        with={(c) => (
          <div className='relative w-full h-full'>
            <div className={classNames('absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center flex-col bg-white bg-opacity-90', className)}>{c}</div>
            {children}
          </div>
        )}
      >
        {indicator ? indicator : <LoadingIcon className={classNames('text-indigo-600', getSizeClass(size))} {...restProps} />}
        {tip ? <div className='text-center'>{tip}</div> : null}
      </Wrapper>
    </>
  );
};

Spin.displayName = 'Spin';
