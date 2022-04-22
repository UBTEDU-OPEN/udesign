import React from 'react';
import classNames from 'classnames';
import { NativeProps } from '../../utils';

export interface GeneratorProps {
  prefixCls: string;
  tagName: 'header' | 'footer' | 'main' | 'section' | 'aside';
  displayName: string;
}

function generator({ prefixCls, tagName, displayName }: GeneratorProps) {
  return (BasicComponent: any) => {
    const Adapter = (props: BasicProps) => {
      return <BasicComponent prefixCls={prefixCls} tagName={tagName} {...props} />;
    };
    Adapter.displayName = displayName;
    return Adapter;
  };
}

export type BasicProps = {
  prefixCls?: string;
  hasSider?: boolean;
} & NativeProps;

interface BasicPropsWithTagName extends BasicProps {
  tagName: 'header' | 'footer' | 'main' | 'section';
}

const Basic = (props: BasicPropsWithTagName) => {
  const { prefixCls, className, children, tagName, ...others } = props;
  const classString = classNames(prefixCls, className);
  return React.createElement(tagName, { className: classString, ...others }, children);
};

const BasicLayout = ({ prefixCls, hasSider, className, children, tagName: Tag, ...others }: BasicPropsWithTagName) => {
  const classString = classNames(prefixCls, hasSider ? 'ud-layout-direction-row' : 'ud-layout-direction-column', className);

  return (
    <>
      <Tag className={classString} {...others}>
        {children}
      </Tag>
    </>
  );
};

export const Layout = generator({
  prefixCls: 'ud-layout',
  tagName: 'section',
  displayName: 'Layout',
})(BasicLayout);

export const Header = generator({
  prefixCls: 'ud-layout-header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);

export const Footer = generator({
  prefixCls: 'ud-layout-footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);

export const Content = generator({
  prefixCls: 'ud-layout-main',
  tagName: 'main',
  displayName: 'Content',
})(Basic);

Layout.displayName = 'Layout';
Header.displayName = 'Layout.Header';
Footer.displayName = 'Layout.Footer';
Content.displayName = 'Layout.Content';