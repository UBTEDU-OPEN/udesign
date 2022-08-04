/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Space, ConfigProvider, Pagination, Button, Modal, Empty } from '@ubt/udesign-ui';
import zh_CN from '@ubt/udesign-ui/src/components/locale/source/zh_CN';
import en_US from '@ubt/udesign-ui/src/components/locale/source/en_US';
import { Demo } from '../../demo';

export default function ConfigProviderPage() {
  const [locale, setLocale] = useState(zh_CN);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Demo.Page title='ConfigProvider 全局配置' description='为组件提供统一的全局化配置。目前内置了中文和英文，其他语言待产品补充。'>
        <Demo.Block
          title='基础用法'
          description={
            <>
              通过向 ConfigProvider 传入 locale 语言包，来切换组件语言。
              {/* 通过 direction 设置组件的文本方向，rtl 表示从右到左 (类似希伯来语或阿拉伯语)， ltr 表示从左到右 (类似中文、英语等大部分语言)。 */}
            </>
          }
        >
          <Space>
            切换语言：
            <Button type={locale === zh_CN ? 'primary' : 'default'} onClick={() => setLocale(zh_CN)}>
              中文
            </Button>
            <Button type={locale === en_US ? 'primary' : 'default'} onClick={() => setLocale(en_US)}>
              英语
            </Button>
          </Space>
          <br />
          <br />
          <ConfigProvider locale={locale}>
            <Pagination total={500} showTotal />
            <br />
            <br />
            <Space>
              <Button type='primary' onClick={() => setVisible(true)}>
                Open Modal
              </Button>
              <Modal visible={visible} title='对话框标题' onCancel={() => setVisible(false)} onOk={() => setVisible(false)}>
                对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文对话框正文
              </Modal>
            </Space>
            <br />
            <br />
            <Empty />
          </ConfigProvider>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
