import React from 'react';
import { Space, Menu, Scrollbar } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function ScrollbarPage() {
  const item = (
    <>
      <li style={{ padding: '15px 20px' }}>Option 1</li>
      <li style={{ padding: '15px 20px' }}>Option 2</li>
      <li style={{ padding: '15px 20px' }}>Option 3</li>
      <li style={{ padding: '15px 20px' }}>Option 4</li>
      <li style={{ padding: '15px 20px' }}>Option 5</li>
      <li style={{ padding: '15px 20px' }}>Option 6</li>
      <li style={{ padding: '15px 20px' }}>Option 7</li>
      <li style={{ padding: '15px 20px' }}>Option 8</li>
    </>
  );
  return (
    <Demo.Page title='Scrollbar 滚动条' description='协助进行页面级整体布局。'>
      <Demo.Block title='滚动条出现位置' description={<>description滚动条出现位置，有三个值:normal、vertical、horizontal；默认值为normal。</>}>
        <Space justify='between'>
          <Scrollbar style={{ height: '350px', width: '200px' }}>
            <ul className='bg-white' style={{ width: '500px' }}>
              {item}
            </ul>
          </Scrollbar>
          <Scrollbar direction='vertical' style={{ height: '350px', width: '200px' }}>
            <ul className='bg-white' style={{ width: '500px' }}>
              {item}
            </ul>
          </Scrollbar>
          <Scrollbar direction='horizontal' style={{ height: '350px', width: '200px' }}>
            <ul className='bg-white' style={{ width: '500px' }}>
              {item}
            </ul>
          </Scrollbar>
        </Space>
      </Demo.Block>
      <Demo.Block title='悬浮效果' description={<>设置hover属性，开启滚动条悬浮效果，鼠标离开时滚动条消失，鼠标移入时出现</>}>
        <Space>
          <Scrollbar hover style={{ height: '350px', width: '200px' }}>
            <ul className='bg-white' style={{ width: '500px' }}>
              {item}
            </ul>
          </Scrollbar>
        </Space>
      </Demo.Block>
    </Demo.Page>
  );
}
