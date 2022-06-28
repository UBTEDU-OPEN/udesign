import React from 'react';
import { Rate, Space } from '@ubt/udesign-ui';
import { Demo } from '../../../demo';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function RadioPage() {
  return (
    <>
      <Demo.Page title='Rate评分' description='评分组件'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              对评价进行展示。
              <br />
              <br />
              对事物进行快速的评级操作。
            </>
          }
        ></Demo.Block>
        <Demo.Block title='基础用法' description='默认的评分用法，从低到高分五个级别，一个单位为一级。'>
          <Rate />
        </Demo.Block>
        <Demo.Block title='半星' description='支持选中半星'>
          <Rate allowHalf />
        </Demo.Block>
        <Demo.Block title='文案展现' description='给评分组件加上文案展示。'>
          <Rate tooltips={desc} />
        </Demo.Block>
        <Demo.Block title='展示型评分' description='纯展示型评分，不带交互。'>
          <Rate disabled defaultValue={2.5} />
        </Demo.Block>
        <Demo.Block title='自定义评分' description='可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文等。'>
          <Space>
            {' '}
            <Rate character={'6'} count={6} />{' '}
          </Space>
          <Space>
            <Rate character={'A'} />
          </Space>
          <Space>
            <Rate character={'Z'} />
          </Space>
          <Space>
            <Rate character={'好'} allowHalf />
          </Space>
          <Space>
            <Rate character={(index: number) => index + 1} allowHalf />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
