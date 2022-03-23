import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';
import { StepProps, StepStatus } from './step';

const getStatusCls = (status: StepStatus) => {
  let cls = '';
  switch (status) {
    case 'finish':
      cls = 'border border-indigo-600 text-indigo-600';
      break;
    case 'process':
      cls = 'bg-indigo-600 text-white';
      break;
    case 'wait':
      cls = 'border border-gray-300 text-gray-300';
      break;
    case 'error':
      break;
    default:
      break;
  }
  return cls;
};

export type StepsProps = {
  current?: number;
} & Pick<StepProps, 'mode'> &
  NativeProps;

export const Steps = ({ mode = 'horizontal', current = 0, children }: StepsProps) => {
  const cls = classNames('', mode === 'horizontal' ? 'flex justify-around' : 'flex flex-col');
  return (
    <div className={cls}>
      {React.Children.map(children, (child, index) => {
        // output the content as user wish
        if (!React.isValidElement(child)) {
          return child;
        }

        const props = child.props as StepProps;
        let status = props.status || 'wait';

        // autoset status if user not set it
        if (index < current) {
          status = props.status || 'finish';
        } else if (index === current) {
          status = props.status || 'process';
        }

        const icon = props.icon ?? (
          <div className={classNames('w-8 h-8 mr-2 flex items-center justify-center rounded-full', getStatusCls(status))}>
            {status === 'finish' ? (
              <svg viewBox='64 64 896 896' focusable='false' data-icon='check' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
                <path d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'></path>
              </svg>
            ) : (
              index + 1
            )}
          </div>
        );

        return React.cloneElement(child, {
          mode,
          status,
          icon,
        });
      })}
    </div>
  );
};
