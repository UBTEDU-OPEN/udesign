import React from 'react';
import { Typography, Space } from '@ubt/udesign-ui';
import { EditFilled } from '@ubt/udesign-icons';
import { Demo } from '../../../demo';
import styles from './index.module.scss';

export default function TypographyPage() {
  return (
    <div className={styles['typography-root']}>
      <Demo.Page title='Typography 排版' description='文本的基本格式'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              当需要展示标题、段落、列表内容时使用，如文章、博客、日志的文本样式。
              <br />
              当需要一列基于文本的基础操作时，如拷贝、省略、可编辑。
            </>
          }
        ></Demo.Block>
        <Demo.Block title='基本排版' description='展示文档样例 标题+正 多级标题+正文' todo='缺少文案' />
        <Demo.Block title='标题组件' description='展示不同级别的标题。'>
          <Typography.Title level={1}>h1. U Design</Typography.Title>
          <Typography.Title level={2}>h2. U Design</Typography.Title>
          <Typography.Title level={3}>h3. U Design</Typography.Title>
          <Typography.Title level={4}>h4. U Design</Typography.Title>
          <Typography.Title level={5}>h5. U Design</Typography.Title>
        </Demo.Block>
        <Demo.Block title='文本与超链接组件' description='内置不同样式的文本以及超链接组件。'>
          <Space direction='vertical' align='start'>
            <Typography.Text>U Design (default)</Typography.Text>
            <Typography.Text type='secondary'>U Design (secondary)</Typography.Text>
            <Typography.Text type='success'>U Design (success)</Typography.Text>
            <Typography.Text type='warning'>U Design (warning)</Typography.Text>
            <Typography.Text type='danger'>U Design (danger)</Typography.Text>
            <Typography.Text disabled>U Design (disabled)</Typography.Text>
            <Typography.Text mark>U Design (mark)</Typography.Text>
            <Typography.Text code>U Design (code)</Typography.Text>
            <Typography.Text keyboard>U Design (keyboard)</Typography.Text>
            <Typography.Text underline>U Design (underline)</Typography.Text>
            <Typography.Text strong>U Design (strong)</Typography.Text>
            <Typography.Text del>U Design (delete)</Typography.Text>
            <Typography.Text italic>U Design (italic)</Typography.Text>
            <Typography.Text link='#'>U Design (Link)</Typography.Text>
          </Space>
        </Demo.Block>
        <Demo.Block title='可交互能力' description='提供可编辑和可复制等额外的交互能力。'>
          <Space direction='vertical' align='start'>
            <Typography.Text style={{ width: '100%' }} editable={{ tooltip: '编辑', icon: () => <EditFilled /> }}>
              This is an editable text.
            </Typography.Text>
            <Typography.Text
              style={{ width: '100%' }}
              editable={{
                tooltip: '编辑',
                autoSize: { minRows: 2 },
                icon: () => <EditFilled />,
              }}
            >
              This is an editable text.
            </Typography.Text>
            <Typography.Text copyable>This is an editable text.</Typography.Text>
          </Space>
        </Demo.Block>
        <Demo.Block title='省略展示' description='多行文本省略。你可以通过 tooltip 属性配置省略展示内容，大量文本时推荐优先使用 expandable。'>
          <Space size='large' direction='vertical'>
            <Typography.Paragraph
              ellipsis={{
                rows: 1,
                symbol: 'more',
                expandable: true,
                tooltip: true,
              }}
            >
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编，
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案，
            </Typography.Paragraph>
            <Typography.Paragraph
              ellipsis={{
                rows: 3,
                tooltip: true,
                symbol: 'more',
                expandable: true,
                suffix: '--William',
                onExpand: () => {
                  alert('展开时触发');
                },
              }}
            >
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编，
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案，
            </Typography.Paragraph>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
