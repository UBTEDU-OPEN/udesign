import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import axios from 'axios';
import { useRouter } from 'next/router';
import classNames from 'classnames';
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
  const router = useRouter();
  const [componentName, setComponentName] = useState(props.componentName?.toLowerCase());
  const [designToken, setDesignToken] = useState<DesignToken>({});

  useEffect(() => {
    const componentNameFromUrl = lodash.nth(window.location.pathname.split('/'), -2);
    setComponentName(componentNameFromUrl?.toLowerCase());
  }, [router.asPath]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window?.__ud__?.designToken) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setDesignToken(window?.__ud__?.designToken);
    } else {
      (async (): Promise<void> => {
        const { data: designTokenFromServer } = await axios.get(`${router.basePath}/designToken.json`);
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

  const renderTable = () => {
    const cls = 'border border-bottom p-4';
    return designToken && componentName ? (
      <table className='w-full text-left'>
        <thead>
          <tr>
            <th className={classNames(cls, 'bg-gray-100')}>变量</th>
            <th className={classNames(cls, 'bg-gray-100')}>说明</th>
            <th className={classNames(cls, 'bg-gray-100')}>默认值</th>
          </tr>
        </thead>
        <tbody>
          {designToken[componentName]?.map((item, index) => (
            <tr className='hover:bg-indigo-50' key={index}>
              <td className='border border-bottom p-4'>{item.key}</td>
              <td className='border border-bottom p-4'>{item.comment}</td>
              <td className='border border-bottom p-4'>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  };

  return designToken && componentName && designToken[componentName] ? (
    <section className='mb-10'>
      <div className='py-4'>
        <div className='text-2xl font-semibold'>CSS</div>
        <div className='text-base text-gray-500 mt-2'>{SITE_NAME} 广泛使用了CSS变量，因此你可以通过修改这些变量来轻松定制主题或者组件样式。</div>
      </div>
      {renderTable()}
    </section>
  ) : null;
};
