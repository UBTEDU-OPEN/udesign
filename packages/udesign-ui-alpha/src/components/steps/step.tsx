import { Divider } from '@ubt/udesign-ui-alpha';
import classNames from 'classnames';
import React from 'react';
import { Mode } from '../../constants';

export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export type StepProps = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  status?: StepStatus;
  mode?: Mode; // horizontal, vertical
};

const getStatusCls = (status: StepStatus, mode: Mode) => {
  let cls = '';
  switch (status) {
    case 'finish':
      break;
    case 'process':
      cls = classNames(mode === 'horizontal' ? 'mx-5' : 'my-5');
      break;
    case 'wait':
      break;
    case 'error':
      break;
    default:
      break;
  }
  return cls;
};

export const Item = ({ icon, title, description, status = 'wait', mode = 'horizontal' }: StepProps) => {
  const cls = classNames('flex flex-1 items-start', getStatusCls(status, mode));
  return (
    <div className={cls}>
      {icon}
      <div className='flex flex-1 flex-col'>
        {mode === 'horizontal' ? (
          <Divider orientation='left'>
            <div className='font-bold'>{title}</div>
          </Divider>
        ) : (
          <div className='font-bold'>{title}</div>
        )}
        <div className='text-gray-400'>{description}</div>
      </div>
    </div>
  );
};

Item.displayName = 'Steps.Item';
