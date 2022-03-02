import React from 'react';
import { Demo } from 'demo';
import { Image } from '@ubt/udesign-ui-alpha';

export default function ImagePage() {
  return (
    <>
      <Demo.Page title='Image 图片'>
        <Demo.Block title='基础'>
          <Image className='rounded' width={300} height={300} src='/demo.png' />
        </Demo.Block>
        <Demo.Block title='fallback'>
          <Image width={100} height={100} src='/error.jpg' />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
