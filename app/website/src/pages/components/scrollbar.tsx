import React from 'react';
import { Space, Scrollbar } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function ScrollbarPage() {
  const item = (
    <ul className='bg-white w-80'>
      <li className='px-10 py-5'>Option 1</li>
      <li className='px-10 py-5'>Option 2</li>
      <li className='px-10 py-5'>Option 3</li>
      <li className='px-10 py-5'>Option 4</li>
      <li className='px-10 py-5'>Option 5</li>
      <li className='px-10 py-5'>Option 6</li>
      <li className='px-10 py-5'>Option 7</li>
      <li className='px-10 py-5'>Option 8</li>
    </ul>
  );
  return (
    <Demo.Page title='Scrollbar 滚动条' description='快速修改滚动条样式，当内容尺寸超过容器时，才会出现。'>
      <Demo.Block title='滚动条出现位置' description='滚动条出现位置，有三个值：normal（水平和垂直都显示）、vertical（只显示垂直滚动条）、horizontal（只显示水平滚动条）；默认值为 normal'>
        <Space justify='between'>
          <div className='w-48 h-80'>
            <Scrollbar>{item}</Scrollbar>
          </div>
          <div className='w-48 h-80'>
            <Scrollbar direction='vertical'>{item}</Scrollbar>
          </div>
          <div className='w-48 h-80'>
            <Scrollbar direction='horizontal'>{item}</Scrollbar>
          </div>
        </Space>
      </Demo.Block>
      <Demo.Block title='悬浮效果' description={<>设置hover属性，开启滚动条悬浮效果，鼠标移入时出现滚动条，鼠标离开时滚动条消失</>}>
        <Space>
          <div className='w-48 h-80'>
            <Scrollbar hover>{item}</Scrollbar>
          </div>
        </Space>
      </Demo.Block>
    </Demo.Page>
  );
}
