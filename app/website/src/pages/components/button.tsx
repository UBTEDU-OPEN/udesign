import React, { useState } from 'react';
import { Demo } from 'demo';
import { SettingIcon } from '@ubt/udesign-ui-alpha';
import { Button, Space } from '@ubt/udesign-ui';

export default function ButtonPage() {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <Demo.Page title='Button 按钮' description='按钮用于开始一个即时操作。'>
        <Demo.Block title='何时使用' description='标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。' />
        <Demo.Block title='按钮类型' description='按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'>
          <Space>
            <Button type='primary'>Primary</Button>
            <Button type='default'>Default</Button>
            <Button type='text'>Text Button</Button>
            <Button type='link'>Link Button</Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='警示状态' description='警示严重程度区分2级，1级警示常用以一般警示作用，2级警示常用于 删除/清空/修改权限等 需要二次确认的危险操作。'>
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
          </Space>
        </Demo.Block>
        <Demo.Block title='按钮形状' description='shape 支持 round, default, square, circle，默认为 round。'>
          <Space>
            <Button type='primary' shape='round'>
              round
            </Button>
            <Button type='primary' shape='default'>
              default
            </Button>
            <Button type='primary' shape='square'>
              square
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。'>
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
          </Space>
        </Demo.Block>
        <Demo.Block title='加载中状态' description='通过 loading 属性设置按钮为加载状态；如果按钮有图标，加载状态下默认会暂时隐藏原有图标。'>
          <Space>
            <Button type='primary' loading={loading} onClick={() => setLoading(!loading)}>
              {loading ? 'loading' : 'Click me'}
            </Button>
            <Button loading={loading} onClick={() => setLoading(!loading)} type='primary' icon={<SettingIcon />}>
              {loading ? 'loading' : 'Click me'}
            </Button>
            <Button loading={loading} onClick={() => setLoading(!loading)} type='primary' shape='round' icon={<SettingIcon />} />
          </Space>
        </Demo.Block>
        <Demo.Block title='图标按钮' description='当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。'>
          <Space>
            <Button type='primary' shape='default' icon={<SettingIcon />} />
            <Button type='primary' shape='circle' icon={<SettingIcon />} />
            <Button type='primary' shape='round' icon={<SettingIcon />} />
            <Button type='primary' icon={<SettingIcon />}>
              设置
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='按钮尺寸' description='尺寸支持 large, middle, small，默认为 middle。其他尺寸可以通过 style 属性传入。'>
          <Space>
            <Button type='primary' size='large'>
              large
            </Button>
            <Button type='primary'>middle</Button>
            <Button type='primary' size='small'>
              small
            </Button>
          </Space>
          <br />
          <Space>
            <Button type='primary' size='large' style={{ width: '300px' }}>
              自定义尺寸
            </Button>
          </Space>
        </Demo.Block>
        <Demo.Block title='块级元素' description='按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。'>
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
