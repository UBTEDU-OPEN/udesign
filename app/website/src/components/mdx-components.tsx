import React from 'react';
import * as uDesign from '@ubt/udesign-ui';
import * as uDesignIcons from '@ubt/udesign-icons';
import { CodeBlock } from './code-block';
import { Highlight } from './highlight';

export const Pre = (props: any) => {
  if (typeof props.children === 'string') return <pre {...props} />;
  const className = props.children?.props.className;
  const code = props.children?.props.children.trim();
  const language = className?.replace(/language-/, '');

  // return <div className='border rounded-lg overflow-hidden'>{language === 'jsx' ? <CodeBlock code={code} /> : <Highlight code={code} language={language} />}</div>;
  return language === 'jsx' ? <CodeBlock code={code} /> : <Highlight code={code} language={language} />;
};

export const mdxComponents = {
  ...uDesign,
  ...uDesignIcons,
  // h1: (props) => <div className='text-3xl mt-14 mb-7 font-semibold' {...props} />,
  // h2: (props) => <div className='text-2xl mt-12 mb-5 font-semibold' {...props} />,
  // h3: (props) => <div className='text-xl mt-10 mb-3 font-semibold' {...props} />,
  // h4: (props) => <div className='text-lg font-semibold' {...props} />,
  // p: (props) => <div className='leading-loose' {...props} />,
  // ul: (props) => <ul className='list-disc' {...props} />,
  // ol: (props) => <ol className='list-decimal' {...props} />,
  // li: (props) => <li className='leading-loose' {...props} />,
  pre: (props: any) => <Pre {...props} />,
};
