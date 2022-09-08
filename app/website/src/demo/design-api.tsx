import React, { useEffect, useState } from 'react';
import lodash from 'lodash';
import axios from 'axios';
import { Result } from '@ubt/udesign-ui';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface Token {
  key: string;
  value: string;
  comment: string;
  default: string;
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
  const router = useRouter();
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
        const { data: designApiFromServer } = await axios.get(`${router.basePath}/designApi.json`);
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
    { key: 'children', required: false, value: 'ReactNode', comment: '子元素', default: '-' },
    { key: 'className', required: false, value: 'string', comment: '样式类名', default: '-' },
    { key: 'style', required: false, value: 'CSSProperties', comment: '内联样式', default: '-' },
  ];

  const renderTable = (data: Token[], name?: string) => {
    const cls = 'border border-bottom p-4';
    return (
      <>
        {name ? (
          <div className='my-4'>
            <div className='text-xl font-semibold'>{name}</div>
          </div>
        ) : null}
        <table className='w-full text-left mb-10'>
          <thead>
            <tr>
              <th className={classNames(cls, 'bg-gray-100')}>属性</th>
              <th className={classNames(cls, 'bg-gray-100')}>说明</th>
              <th className={classNames(cls, 'bg-gray-100')}>类型</th>
              <th className={classNames(cls, 'bg-gray-100 whitespace-nowrap')}>默认值</th>
              <th className={classNames(cls, 'bg-gray-100')}>required</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className='hover:bg-indigo-50' key={index}>
                <td className={cls}>{item.key}</td>
                <td className={cls}>{item.comment}</td>
                <td className={cls}>{item.value}</td>
                <td className={cls}>{item.default || '-'}</td>
                <td className={cls}>{item.required ? '是' : '否'}</td>
              </tr>
            ))}
            {commonApi.map((item, index) => (
              <tr className='hover:bg-indigo-50' key={index}>
                <td className={cls}>{item.key}</td>
                <td className={cls}>{item.comment}</td>
                <td className={cls}>{item.value}</td>
                <td className={cls}>{item.default || '-'}</td>
                <td className={cls}>{item.required ? '是' : '否'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className='text-small text-gray-500 mt-2'>* {SITE_NAME} 组件默认都包含 children、className、style 三个通用 API</div> */}
      </>
    );
  };
  // (
  // <div className='border rounded-lg overflow-hidden'>
  //   <Result title='暂无数据' subtitle='当前组件没有可使用的 API，或者开发者没有正确编写导致无法正确显示。'>
  //     <div className='text-base text-gray-400'>如果发现 API 不完整，请联系开发人员补充。</div>
  //   </Result>
  // </div>
  // );

  const renderContent = () => {
    if (designApi && componentName) {
      // 特殊处理Grid组件
      if (componentName === 'grid') {
        return (
          <>
            {designApi.row?.length && renderTable(designApi.row, 'Row')}
            {designApi.col?.length && renderTable(designApi.col, 'Col')}
          </>
        );
      }
      if (designApi[componentName]?.length) {
        return renderTable(designApi[componentName]);
      }
      return null;
    }
    return null;
  };

  return (
    <section className='mb-10'>
      <div className='py-4'>
        <div className='text-2xl font-semibold'>API 参考</div>
      </div>
      {renderContent()}
    </section>
  );
};
