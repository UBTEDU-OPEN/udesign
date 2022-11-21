/* eslint-disable camelcase */
import React, { useRef } from 'react';
import { Space, Carousel, Button } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import icon_ip from '../../../public/icon_ip.svg';
import icon_wifi from '../../../public/icon_wifi.svg';
import icon_bluetooth from '../../../public/icon_bluetooth.svg';
import { menus } from '../../constants/menus';

const itemsData = [
  {
    name: '蓝牙 1',
    image: icon_bluetooth,
  },
  {
    name: 'WIFI 2',
    image: icon_wifi,
  },
  {
    name: '蓝牙 3',
    image: icon_bluetooth,
  },
  {
    name: 'IP 4',
    image: icon_ip,
  },
];

export default function CarouselPage() {
  const ref = useRef<any>();

  const renderItems = () =>
    itemsData.map((item, index) => (
      <div className='h-full text-center' key={index}>
        {Array(4)
          .fill(1)
          .map((_, key) => (
            <div className='inline-block' key={key}>
              <img src={item.image} alt='' />
              <span className='text-sm'>{item.name}</span>
            </div>
          ))}
      </div>
    ));

  return (
    <>
      <Demo.Doc base='components' menus={menus}>
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
              <Carousel style={{ height: '174px', width: '516px', '--ud-carousel-icon-left': '-60px', '--ud-carousel-icon-right': '-60px' }}>{renderItems()}</Carousel>
            </Space>
          </Demo.Block>
          <Demo.Block title='不进行循环切换' description='当图片或者卡片达到最后一个或第一个,不会再切换。'>
            <Space justify='center'>
              <Carousel loop={false} style={{ height: '174px', width: '516px', '--ud-carousel-icon-left': '-60px', '--ud-carousel-icon-right': '-60px' }}>
                {renderItems()}
              </Carousel>
            </Space>
          </Demo.Block>
          <Demo.Block title='自动轮播' description='当图片或者卡片超过4个，需要启动轮播展示。'>
            <Space justify='center'>
              <Carousel loop={true} autoPlay={{ interval: 1500 }} style={{ height: '174px', width: '516px', '--ud-carousel-icon-left': '-60px', '--ud-carousel-icon-right': '-60px' }}>
                {renderItems()}
              </Carousel>
            </Space>
          </Demo.Block>
          <Demo.Block title='调用函数进行切换' description='prev()：上一个；next()：下一个；goTo( index : number )：跳到制指定图片(轮播图片或卡片索引从0开始)；'>
            <Space justify='center'>
              <Carousel ref={ref} loop={false} style={{ height: '174px', width: '516px', '--ud-carousel-icon-left': '-60px', '--ud-carousel-icon-right': '-60px' }}>
                {renderItems()}
              </Carousel>
            </Space>

            <Space justify='between'>
              <Button
                onClick={() => {
                  ref.current?.prev();
                }}
              >
                Left
              </Button>
              <Button
                onClick={() => {
                  ref.current?.next();
                }}
              >
                Right
              </Button>
              <Button
                onClick={() => {
                  ref.current?.goTo(3);
                }}
              >
                goto(3)(跳到第四页)
              </Button>
            </Space>
          </Demo.Block>
        </Demo.Page>
      </Demo.Doc>
    </>
  );
}
