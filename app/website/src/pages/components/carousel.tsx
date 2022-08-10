import React from 'react';
import { Space, Carousel } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function ButtonPage() {
  return (
    <>
      <Demo.Page title='Carousel 走马灯' description='旋转木马，一组轮播的区域。'>
        <Demo.Block
          title='何时使用'
          description={
            <>
              1. 当有一组平级的内容；
              <br />
              2. 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现；
              <br /> 3. 常用于一组图片或卡片轮播。
            </>
          }
        />
        <Demo.Block title='基本使用' description='当图片或者卡片超过4个，需要启动轮播展示。'>
          <Space justify='center'>
            <Carousel loop={false} style={{ height: '174px', width: '516px', '--ud-carousel-icon-left': '-60px', '--ud-carousel-icon-right': '-60px' }}>
              <div className='h-full text-center'>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
              </div>
              <div className='h-full text-center'>
                <div className='inline-block'>
                  <img src='/icon_wifi.svg' alt='' />
                  <span className='text-sm'>WIFI</span>
                  <span></span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_wifi.svg' alt='' />
                  <span className='text-sm'>WIFI</span>
                  <span></span>
                </div>

                <div className='inline-block'>
                  <img src='/icon_wifi.svg' alt='' />
                  <span className='text-sm'>WIFI</span>
                  <span></span>
                </div>

                <div className='inline-block'>
                  <img src='/icon_wifi.svg' alt='' />
                  <span className='text-sm'>WIFI</span>
                  <span></span>
                </div>
              </div>
              <div className='h-full text-center'>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_bluetooth.svg' alt='' />
                  <span className='text-sm'>蓝牙</span>
                </div>
              </div>
              <div className='h-full text-center'>
                <div className='inline-block'>
                  <img src='/icon_ip.svg' alt='' />
                  <span>IP</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_ip.svg' alt='' />
                  <span>IP</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_ip.svg' alt='' />
                  <span>IP</span>
                </div>
                <div className='inline-block'>
                  <img src='/icon_ip.svg' alt='' />
                  <span>IP</span>
                </div>
              </div>
            </Carousel>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
