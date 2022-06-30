import React, { ReactNode } from 'react';
import classNames from 'classnames';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Tag } from '@ubt/udesign-ui';
import { Collapse } from '@ubt/udesign-ui-alpha';
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

export const Block = ({ title, description, background, transform, compact, debug, todo, children, className }: DemoBlockProps) => {
  const cls = classNames('relative', background ? 'bg-gray-50' : '', transform ? 'translate-x-0 translate-y-0' : '', compact ? '' : 'p-12', className);
  const code = reactElementToJSXString(React.isValidElement(children) ? children : <>{children}</>, { maxInlineAttributesLineLength: 80, showFunctions: false, sortProps: false, useBooleanShorthandSyntax: false });
  return debug && process.env.NODE_ENV === 'production' ? null : (
    <section className='mb-10'>
      {title || description ? (
        <div className='py-4'>
          <div className='text-2xl font-semibold'>{title}</div>
          <div className='text-base text-gray-500 mt-2'>{description}</div>
          <div className='text-indigo-600 mt-2'>{todo ? `TODO: ${todo}` : ''}</div>
        </div>
      ) : null}
      {children ? (
        <div className='border rounded-lg overflow-hidden'>
          <div className={cls}>
            {debug ? (
              <Tag className='absolute top-0 right-0' color='yellow'>
                Dev Only
              </Tag>
            ) : null}
            {children}
          </div>
          <Collapse className='border-t'>
            <Collapse.Item title='代码' name='1'>
              <div className='px-6 py-5 bg-gray-50 text-gray-500 overflow-auto'>
                <pre className='whitespace-pre-wrap'>{code}</pre>
              </div>
            </Collapse.Item>
          </Collapse>
        </div>
      ) : null}
    </section>
  );
};

Block.displayName = 'Demo.Block';
