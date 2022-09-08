import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import axios from 'axios';
import { SITE_NAME } from '../constants/site';

interface Token {
  key: string;
  value: string;
  comment: string;
  category: string;
  raw: string;
}

interface DesignToken {
  [key: string]: Token[];
}

export type DesignTokenProps = {
  componentName?: string;
};

export const DesignToken = (props: DesignTokenProps) => {
  const [componentName, setComponentName] = useState(props.componentName?.toLowerCase());
  const [designToken, setDesignToken] = useState<DesignToken>({});

  useEffect(() => {
    if (!componentName) {
      const componentNameFromUrl = lodash.nth(window.location.pathname.split('/'), -2);
      setComponentName(componentNameFromUrl?.toLowerCase());
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window?.__ud__?.designToken) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setDesignToken(window?.__ud__?.designToken);
    } else {
      (async (): Promise<void> => {
        const { data: designTokenFromServer } = await axios.get(`${process.env.UDESIGN_BASE_PATH ? process.env.UDESIGN_BASE_PATH : ''}/designToken.json`);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.__ud__ = {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ...window.__ud__,
          designToken: designTokenFromServer,
        };
        setDesignToken(designTokenFromServer);
      })();
    }
  }, []);

  const renderTable = () =>
    designToken && componentName && designToken[componentName] ? (
      <table className='w-full text-left'>
        <thead>
          <tr>
            <th>变量</th>
            <th>默认值</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          {designToken[componentName].map((item, index) => (
            <tr className='hover:bg-indigo-50' key={index}>
              <td className='border border-bottom p-4'>{item.key}</td>
              <td className='border border-bottom p-4'>{item.value}</td>
              <td className='border border-bottom p-4'>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div className='text-indigo-500'>当前组件没有可使用的 CSS 变量，或者开发者没有正确编写导致无法显示。</div>
    );

  return (
    <section className='mb-10'>
      <div className='py-4'>
        <div className='text-2xl font-semibold'>CSS 变量</div>
        <div className='text-base text-gray-500 mt-2'>{SITE_NAME} 广泛使用了CSS变量，因此你可以通过修改这些变量来轻松定制主题或者组件样式。</div>
      </div>
      {renderTable()}
    </section>
  );
};
