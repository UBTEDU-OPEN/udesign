import React from 'react';
import { Demo } from 'demo';
import { Cell, SettingIcon, Button, Tag, Space } from '@ubt/udesign-ui-alpha';

const Icon = <SettingIcon className='text-2xl mr-1' />;

export default function CellPage() {
  return (
    <>
      <Demo.Page title='Cell 单元格' description='单元格为列表中的单个展示项。'>
        <Demo.Block compact title='基础用法' description='Cell 可以单独使用，也可以与 CellGroup 搭配使用，CellGroup 可以为 Cell 提供上下外边框。'>
          <Cell title='单元格' extra='内容' />
          <Cell title='单元格' description='描述信息' extra='内容' onClick={() => console.log('onClick')} />
        </Demo.Block>
        <Demo.Block compact title='展示图标' description='通过 prefix 属性在标题左侧展示图标。'>
          <Cell prefix={Icon} title='单元格' extra='内容' />
          <Cell prefix={Icon} title='单元格' description='描述信息' extra='内容' />
        </Demo.Block>
        <Demo.Block compact title='展示箭头' description='设置 arrow 属性后会在单元格右侧显示箭头，并且可以通过 arrowDirection 属性控制箭头方向。'>
          <Cell title='单元格' arrow />
          <Cell title='单元格' extra='内容' arrow />
          <Cell title='单元格' extra='内容' arrow arrowDirection='down' />
        </Demo.Block>
        <Demo.Block compact title='禁用状态' description='通过 disabled 属性来禁用单个单元格。'>
          <Cell title='单元格' arrow disabled />
          <Cell title='单元格' extra='内容' arrow disabled />
        </Demo.Block>
        <Demo.Block compact title='页面导航' description='可以通过 url 属性进行 URL 跳转，或通过 to 属性进行路由跳转。'>
          <Cell title='URL 跳转' arrow url='https://www.baidu.com' />
          <Cell title='路由跳转' arrow to='avatar' />
        </Demo.Block>
        <Demo.Block compact background title='分组标题' description='通过 CellGroup 的 title 属性可以指定分组标题。'>
          <Cell.Group title='分组1'>
            <Cell title='单元格' extra='内容' />
          </Cell.Group>
          <Cell.Group title='分组2' inset>
            <Cell title='单元格' extra='内容' />
          </Cell.Group>
        </Demo.Block>
        <Demo.Block compact title='自定义内容' description='使用 children 来自定义内容' debug>
          <Cell className='text-sm leading-6'>
            <div className='flex items-end'>
              <span className='flex-1 text-lg'>服务器开发工程师</span>
              <span className='text-red-500 text-right'>18-30K·16薪</span>
            </div>
            <div className='text-gray-400 font-light'>
              <span>迅雷网络</span>
              <span>深圳</span>
            </div>
            <Space size='small' className='my-1'>
              <Tag size='small'>在校/应届</Tag>
              <Tag size='small'>本科</Tag>
              <Tag size='small'>Java</Tag>
              <Tag size='small'>分布式技术</Tag>
              <Tag size='small'>后端开发</Tag>
            </Space>
            <Space className='ml-1'>
              <div className='flex-1'>
                <div className='name'>陈女士·招聘主管</div>
              </div>
              <div className='text-right'>
                <Button type='primary' size='mini'>
                  立即沟通
                </Button>
              </div>
            </Space>
          </Cell>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
