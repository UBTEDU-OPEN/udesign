import React, { ReactNode } from 'react';
import classNames from 'classnames';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Tag, Collapse } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';

type DemoBlockProps = {
  title?: string;
  description?: ReactNode;
  background?: boolean; // 是否添加背景颜色
  transform?: boolean; // 可使得内部 position: fixed 元素相对于 Demo 包裹器定位
  compact?: boolean; // 是否移除内边距
  debug?: boolean; // 是否只在开发环境下展示
  todo?: string;
} & NativeProps;

export const Block = ({ title, description, background = true, transform, compact, debug, todo, children, className }: DemoBlockProps) => {
  const cls = classNames('relative', transform ? 'translate-x-0 translate-y-0' : '', compact ? '' : 'p-12', className);
  const code = reactElementToJSXString(React.isValidElement(children) ? children : <>{children}</>, { maxInlineAttributesLineLength: 80, showFunctions: false, sortProps: false, useBooleanShorthandSyntax: false });
  return debug && process.env.NODE_ENV === 'production' ? null : (
    <section className='my-12'>
      {title || description ? (
        <div className='mb-10'>
          {title ? <div className='text-2xl font-semibold'>{title}</div> : null}
          {description ? <div className='text-base text-gray-500 mt-7'>{description}</div> : null}
          {todo ? <div className='text-indigo-600 mt-2'>TODO: {todo}</div> : null}
        </div>
      ) : null}
      {children ? (
        <div className='border rounded-lg'>
          <div className={cls} style={background ? { background: 'rgba(242,244,250,0.45)' } : {}}>
            {debug ? (
              <Tag className='absolute top-0 right-0' color='yellow'>
                Dev Only
              </Tag>
            ) : null}
            {children}
          </div>
          <Collapse className='border-t m-0' style={{ '--ud-collapse-item-margin': '0' }}>
            <Collapse.Item title='代码' name='1' style={{ padding: '10px' }}>
              <div className='px-6 py-5 bg-gray-50 text-gray-500 overflow-auto'>
                <pre className='whitespace-pre-wrap break-all'>{code}</pre>
              </div>
            </Collapse.Item>
          </Collapse>
        </div>
      ) : null}
    </section>
  );
};

Block.displayName = 'Demo.Block';
