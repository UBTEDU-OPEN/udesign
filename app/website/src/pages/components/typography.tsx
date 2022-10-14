import React, { useState } from 'react';
import { Typography, Space, Copy, Toast } from '@ubt/udesign-ui';
import { EditFilled, CopyOutlined, CheckOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

const { Title, Text, Paragraph } = Typography;

export default function TypographyPage() {
  const [copyIcon, setCopyIcon] = useState(true);

  return (
    <>
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
        />
        <Demo.Block title='标题组件' description='展示不同级别的标题。'>
          <Title level={1}>h1. uDesign</Title>
          <Title level={2}>h2. uDesign</Title>
          <Title level={3}>h3. uDesign</Title>
          <Title level={4}>h4. uDesign</Title>
          <Title level={5}>h5. uDesign</Title>
        </Demo.Block>
        <Demo.Block title='文本与超链接组件' description='内置不同样式的文本以及超链接组件。'>
          <Space direction='vertical' align='start'>
            <Text>uDesign (default)</Text>
            <Text type='secondary'>uDesign (secondary)</Text>
            <Text type='success'>uDesign (success)</Text>
            <Text type='warning'>uDesign (warning)</Text>
            <Text type='danger'>uDesign (danger)</Text>
            <Text disabled>uDesign (disabled)</Text>
            <Text mark>uDesign (mark)</Text>
            <Text code>uDesign (code)</Text>
            <Text keyboard>uDesign (keyboard)</Text>
            <Text underline>uDesign (underline)</Text>
            <Text strong>uDesign (strong)</Text>
            <Text del>uDesign (delete)</Text>
            <Text italic>uDesign (italic)</Text>
            <Text link='#'>uDesign (Link)</Text>
          </Space>
        </Demo.Block>
        <Demo.Block title='可交互能力' description='提供可编辑和可复制等额外的交互能力。'>
          <Space direction='vertical' align='start'>
            <Text style={{ width: '100%' }} editable={{ tooltip: '编辑', icon: () => <EditFilled /> }}>
              This is an editable text.
            </Text>
            <Text
              style={{ width: '100%' }}
              editable={{
                tooltip: '编辑',
                autoSize: { minRows: 2 },
                icon: () => <EditFilled />,
              }}
            >
              This is an editable text.
            </Text>
            <Text>
              This is an editable text.
              <Copy
                style={{ color: '#7284fb', marginLeft: '5px' }}
                text='复制成功'
                onSuccess={() => {
                  setCopyIcon(!copyIcon);
                  Toast('复制成功');
                  setTimeout(() => {
                    setCopyIcon(copyIcon);
                  }, 2000);
                }}
                onError={() => Toast('复制失败')}
              >
                {copyIcon ? <CopyOutlined /> : <CheckOutlined style={{ color: '#7bdc7b' }} />}
              </Copy>
            </Text>
          </Space>
        </Demo.Block>
        <Demo.Block title='省略展示' description='多行文本省略。你可以通过 tooltip 属性配置省略展示内容，大量文本时推荐优先使用 expandable。'>
          <Space size='large' direction='vertical'>
            <Paragraph
              ellipsis={{
                rows: 1,
                symbol: 'more',
                expandable: true,
                tooltip: true,
              }}
            >
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案， 这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编，
              这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案这是一段待编辑的文案，
            </Paragraph>
            <Paragraph
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
            </Paragraph>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

TypographyPage.getLayout = getLayout;
