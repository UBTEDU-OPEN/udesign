import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import axios from 'axios';
import { Result } from '@ubt/udesign-ui';
import { SITE_NAME } from '../constants/site';

interface Token {
  key: string;
  value: string;
  comment: string;
  required: boolean;
  raw: string;
}

interface DesignAPI {
  [key: string]: Token[];
}

export type DesignAPIProps = {
  componentName?: string;
};

export const DesignAPI = (props: DesignAPIProps) => {
  const [componentName, setComponentName] = useState(props.componentName?.toLowerCase());
  const [designApi, setDesignAPI] = useState<DesignAPI>({});

  useEffect(() => {
    if (!componentName) {
      const componentNameFromUrl = lodash.nth(window.location.pathname.split('/'), -2);
      setComponentName(componentNameFromUrl?.toLowerCase());
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window?.__ud__?.designApi) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setDesignAPI(window?.__ud__?.designApi);
    } else {
      (async (): Promise<void> => {
        const { data: designApiFromServer } = await axios.get('/designApi.json');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.__ud__ = {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ...window.__ud__,
          designApi: designApiFromServer,
        };
        setDesignAPI(designApiFromServer);
      })();
    }
  }, []);

  const commonApi = [
    { key: 'children', required: false, value: 'ReactNode', comment: '子元素' },
    { key: 'className', required: false, value: 'string', comment: '样式类名' },
    { key: 'style', required: false, value: 'CSSProperties', comment: '内联样式' },
  ];

  const renderTable = () =>
    designApi && componentName && designApi[componentName]?.length ? (
      <>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th>属性</th>
              <th>required</th>
              <th>类型</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {designApi[componentName].map((item, index) => (
              <tr className='hover:bg-indigo-50' key={index}>
                <td className='border border-bottom p-4'>{item.key}</td>
                <td className='border border-bottom p-4'>{item.required ? '是' : '否'}</td>
                <td className='border border-bottom p-4'>{item.value}</td>
                <td className='border border-bottom p-4'>{item.comment}</td>
              </tr>
            ))}
            {commonApi.map((item, index) => (
              <tr className='hover:bg-indigo-50' key={index}>
                <td className='border border-bottom p-4'>{item.key}</td>
                <td className='border border-bottom p-4'>{item.required ? '是' : '否'}</td>
                <td className='border border-bottom p-4'>{item.value}</td>
                <td className='border border-bottom p-4'>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className='text-small text-gray-500 mt-2'>* {SITE_NAME} 组件默认都包含 children、className、style 三个通用 API</div> */}
      </>
    ) : (
      <div className='border rounded-lg overflow-hidden'>
        <Result title='暂无数据' subtitle='当前组件没有可使用的 API，或者开发者没有正确编写导致无法正确显示。'>
          <div className='text-base text-gray-400'>如果发现 API 不完整，请联系开发人员补充。</div>
        </Result>
      </div>
    );

  return (
    <section className='mb-10'>
      <div className='py-4'>
        <div className='text-2xl font-semibold'>API</div>
      </div>
      {renderTable()}
    </section>
  );
};
