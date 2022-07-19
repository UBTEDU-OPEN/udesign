import React, { useState } from 'react';
import { Button, Space } from '@ubt/udesign-ui';
import { SettingFilled } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { SITE_NAME } from '../../constants/site';

export default function ButtonPage() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <Demo.Page title='Button 按钮' description='按钮用于开始一个即时操作。'>
        <Demo.Block title='何时使用' description='标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。' />
        <Demo.Block
          title='按钮类型'
          description={
            <>
              <b>
                在 {SITE_NAME} 中我们提供了五种类型的按钮。
                <br />
                五种类型：主按钮、次按钮、无边框按钮、文本按钮和链接按钮。
              </b>
              <br />
              <br />
              1.主按钮：用于主操作命令点，一个操作区域只能有一个主按钮。
              <br />
              2.次按钮：用于没有主次之分的一组平级操作命令。
              <br />
              3.无边框按钮：一般是图标按钮，常用于添加/输入/显示密码等操作命令中。
              <br />
              4.文本按钮：用于最次级的操作命令。
              <br />
              5.链接按钮：一般用于链接，即导航至某位置。
              <br />
            </>
          }
        >
          <Space>
            <Button type='primary'>Primary</Button>
            <Button type='default'>Default</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
            <Button type='text' shape='circle' icon={<SettingFilled />} />
          </Space>
        </Demo.Block>
        <Demo.Block
          title='按钮状态属性'
          description={
            <>
              <b>
                四种状态：警示、 毛玻璃半透明、不可用、加载中。
                <br />
                四种状态属性与上面五种类型配合使用。
              </b>
              <br />
              <br />
              警示：一般用于 删除/清空/修改权限等 需要二次确认的危险操作。
              <br />
              毛玻璃半透明：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
              <br />
              不可用：操作命令不可用的时候，一般需要文案解释。
              <br />
              加载中：用于异步操作等待反馈的时候，也可以避免多次提交。
              <br />
            </>
          }
        />
        <Demo.Block title='警示状态属性' description='警示严重程度区分2级，1级警示常用以一般警示作用，2级警示常用于 删除/清空/修改权限等 需要二次确认的危险操作。'>
          <Space>
            <Button type='primary' warning>
              取消
            </Button>
            <Button type='default' warning>
              取消
            </Button>
            <Button type='text' warning>
              Text Button
            </Button>
            <Button type='link' warning>
              Link Button
            </Button>
            <Button type='text' shape='circle' icon={<SettingFilled />} warning />
          </Space>
          <br />
          <Space>
            <Button type='primary' danger>
              删除
            </Button>
            <Button type='default' danger>
              删除
            </Button>
            <Button type='text' danger>
              Text Button
            </Button>
            <Button type='link' danger>
              Link Button
            </Button>
            <Button type='text' shape='circle' icon={<SettingFilled />} danger />
          </Space>
        </Demo.Block>
        <Demo.Block title='按钮形状' description='shape 支持 circle，round, square, 默认为 round。'>
          <Space>
            <Button type='primary' shape='circle'>
              circle
            </Button>
            <Button type='primary' shape='round'>
              round
            </Button>
            <Button type='primary' shape='square'>
              square
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。'>
          <Space>
            <Button type='primary' disabled>
              Primary
            </Button>
            <Button type='default' disabled>
              Default
            </Button>
            <Button type='text' disabled>
              Text Button
            </Button>
            <Button type='link' disabled>
              Link Button
            </Button>
            <Button type='text' shape='circle' icon={<SettingFilled />} disabled />
          </Space>
        </Demo.Block>
        <Demo.Block title='加载中状态' description='通过 loading 属性设置按钮为加载状态；如果按钮有图标，加载状态下默认会暂时隐藏原有图标。'>
          <Space>
            <Button type='primary' loading={loading} onClick={() => setLoading(!loading)}>
              {loading ? 'loading' : 'Click me'}
            </Button>
            <Button loading={loading} onClick={() => setLoading(!loading)} type='primary' icon={<SettingFilled />}>
              {loading ? 'loading' : 'Click me'}
            </Button>
            <Button loading={loading} onClick={() => setLoading(!loading)} type='primary' shape='round' icon={<SettingFilled />} />
          </Space>
        </Demo.Block>
        <Demo.Block
          title='图标按钮'
          description={
            <>
              当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
              <br />
              如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
            </>
          }
        >
          <Space>
            <Button type='primary' shape='round' icon={<SettingFilled />} />
            <Button type='primary' shape='circle' icon={<SettingFilled />} />
            <Button type='primary' shape='square' icon={<SettingFilled />} />
            <Button type='primary' icon={<SettingFilled />}>
              设置
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block
          title='按钮尺寸'
          description={
            <>
              按钮有大、中、小三种尺寸。
              <br />
              通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
            </>
          }
        >
          <Space align='center'>
            small
            <Button size='small' type='primary'>
              Primary
            </Button>
            <Button size='small' type='default'>
              Default
            </Button>
            <Button size='small' type='text'>
              Text Button
            </Button>
            <Button size='small' type='link'>
              Link Button
            </Button>
            <Button size='small' type='text' shape='circle' icon={<SettingFilled />} />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space align='center'>
            middle
            <Button size='middle' type='primary'>
              Primary
            </Button>
            <Button size='middle' type='default'>
              Default
            </Button>
            <Button size='middle' type='text'>
              Text Button
            </Button>
            <Button size='middle' type='link'>
              Link Button
            </Button>
            <Button size='middle' type='text' shape='circle' icon={<SettingFilled />} />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space align='center'>
            large
            <Button size='large' type='primary'>
              Primary
            </Button>
            <Button size='large' type='default'>
              Default
            </Button>
            <Button size='large' type='text'>
              Text Button
            </Button>
            <Button size='large' type='link'>
              Link Button
            </Button>
            <Button size='large' type='text' shape='circle' icon={<SettingFilled />} />
          </Space>
        </Demo.Block>
        <Demo.Block>
          <Space align='center'>
            自定义
            <Button type='primary' size='large' style={{ width: '300px', height: '80px' }}>
              自定义尺寸
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='Block 按钮' description='通过 block 属性使按钮适合其父宽度。'>
          <Space direction='vertical'>
            <Button type='primary' block>
              Primary
            </Button>
            <Button type='default' block>
              Default
            </Button>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
