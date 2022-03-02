import classNames from 'classnames';

/**
 * normalCls: 额外的非禁用样式
 * disabledCls: 额外的禁用样式
 */
export const getDisabledCls = (disabled?: boolean, normalCls?: string, disabledCls?: string) => {
  return disabled ? classNames('cursor-not-allowed opacity-50 select-none', disabledCls) : normalCls;
};
