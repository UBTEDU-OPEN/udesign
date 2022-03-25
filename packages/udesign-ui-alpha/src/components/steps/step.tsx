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

export const Item = ({ icon, title, description, status = 'wait', mode = 'horizontal' }: StepProps) => {
  const cls = classNames('flex flex-1 items-center last:flex-none', mode === 'horizontal' ? 'pr-5 last:pr-0' : 'my-5');
  return (
    <div className={cls}>
      {icon}
      <div className='flex flex-1 flex-col'>
        {mode === 'horizontal' ? (
          <Divider orientation='left'>
            <div className={classNames(status === 'wait' ? 'text-gray-400' : '')}>{title}</div>
          </Divider>
        ) : (
          <div className={classNames(status === 'wait' ? 'text-gray-400' : '')}>{title}</div>
        )}
        <div className='text-gray-400'>{description}</div>
      </div>
    </div>
  );
};

Item.displayName = 'Steps.Item';
