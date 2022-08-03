import React from 'react';
import DefaultLocale from '../locale/source/zh_CN';
import { ConfigContext, ConfigContextProps } from './context';
import { BASE_CLASS_PREFIX } from '../../constants';

export type ConfigProviderProps = ConfigContextProps;

export const ConfigProvider = (props: ConfigProviderProps) => {
  const { locale = DefaultLocale, direction = 'ltr', ...rest } = props;

  const renderChildren = () => {
    const { direction, children } = props;
    if (direction === 'rtl') {
      return <div className={`${BASE_CLASS_PREFIX}-${direction}`}>{children}</div>;
    }
    return children;
  };

  return (
    <ConfigContext.Provider
      value={{
        locale,
        direction,
        ...rest,
      }}
    >
      {renderChildren()}
    </ConfigContext.Provider>
  );
};
