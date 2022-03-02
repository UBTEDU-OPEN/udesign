import React, { useState } from 'react';
import classNames from 'classnames';
import { getDisabledCls, NativeProps } from '../../utils';
import { Popup } from '../popup';
import { Menu } from '../menu';

export type Option = {
  text: string;
  value: string;
  disabled?: boolean;
};

export type ItemProps = {
  text?: string;
  options?: Option[];
  disabled?: boolean;
} & NativeProps;

export const Item = ({ text, options, disabled, className, children, style }: ItemProps) => {
  const [opened, setOpened] = useState(false);
  const cls = classNames('p-3 flex', getDisabledCls(disabled), className);
  return (
    <>
      <div className={cls} style={style} onClick={() => setOpened(true)}>
        {text || children}
      </div>
      {opened ? (
        <Popup position='top' getPopupContainer={() => document.body}>
          {options ? (
            <Menu vertical onChange={() => setOpened(false)}>
              {options.map((option, i) => (
                <Menu.Item key={i}>
                  {option.text}
                </Menu.Item>
              ))}
            </Menu>
          ) : null}
        </Popup>
      ) : null}
    </>
  );
};

Item.displayName = 'Select.Item';
