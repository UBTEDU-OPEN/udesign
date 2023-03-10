import React, { useState } from 'react';
import classNames from 'classnames';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { Copy, Space, Tooltip } from '@ubt/udesign-ui';
import { CopyOutlined, DownOutlined, UpOutlined } from '@ubt/udesign-icons';
import * as uDesign from '@ubt/udesign-ui';
import * as uDesignIcons from '@ubt/udesign-icons';
import { PrismTheme } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import { Img } from './img';

export type CodeBlockProps = {
  code?: string;
  theme?: PrismTheme;
};

export const CodeBlock = ({ code = '', theme = nightOwl }: CodeBlockProps) => {
  const renderPreview = () => {
    const cls = classNames('relative p-12 overflow-auto not-prose');

    return (
      <div className={cls} style={{ background: 'rgba(242,244,250,0.45)' }}>
        <LivePreview />
        <LiveError />
      </div>
    );
  };

  const renderEditor = () => {
    const [collapsed, setCollapsed] = useState(true);
    const cls = classNames('relative p-3 bg-gray-900 text-gray-500 overflow-auto text-sm text-left', {
      hidden: collapsed,
    });
    return (
      <>
        <div className='border-t px-4 py-3 cursor-pointer flex justify-between' onClick={() => setCollapsed(!collapsed)}>
          <span>代码</span>
          <div>
            <Tooltip content={collapsed ? '显示代码' : '收起代码'}>{collapsed ? <DownOutlined /> : <UpOutlined />}</Tooltip>
          </div>
        </div>
        <div className={cls}>
          {renderCopy()}
          <LiveEditor className='not-prose' />
        </div>
      </>
    );
  };

  const renderCopy = () => {
    const [content, setContent] = useState('复制代码');
    return (
      <Copy
        className='cursor-pointer text-white text-lg absolute top-5 right-5'
        text={code}
        onSuccess={() => {
          setContent('复制成功');
        }}
        onError={() => setContent('复制失败')}
      >
        <Tooltip content={content} onVisibleChange={() => setContent('复制代码')}>
          <CopyOutlined />
        </Tooltip>
      </Copy>
    );
  };

  const ReactLiveScope = {
    React,
    ...React,
    ...uDesign,
    ...uDesignIcons,
    Img,
  };

  return (
    <div className='border rounded-lg overflow-hidden my-8'>
      <LiveProvider code={code} scope={ReactLiveScope} theme={theme}>
        {renderPreview()}
        {renderEditor()}
      </LiveProvider>
    </div>
  );
};
