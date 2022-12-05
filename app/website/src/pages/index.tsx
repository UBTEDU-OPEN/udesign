import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Space, Button } from '@ubt/udesign-ui';
import { NativeProps } from '@ubt/udesign-utils';
import { Layout } from '../demo/layout';
import { Img } from '../components';

const blogData = [
  {
    title: '快速上手',
    description: '统一 UBTECH 教育项目的界面设计风格',
    url: '/docs/quick-start/',
    image: '/codebase_getstarted.png',
  },
  {
    title: '主题',
    description: '自定义一套 udesign 的主题',
    url: '/docs/theme/',
    image: '/codebase_theme.png',
  },
  {
    title: '更新日志',
    description: '关注更新内容，可能涉及接口变动',
    url: '/docs/changelog/',
    image: '/codebase_css.png',
  },
];

const Section = ({ children, className }: NativeProps) => {
  const cls = classNames('md:w-1/2 xl:w-1/3 2xl:w-1/4 py-20', className);
  return <div className={cls}>{children}</div>;
};

const Divider = ({ className }: NativeProps) => {
  const cls = classNames('border-t border-gray-800 my-10 w-48', className);
  return <div className={cls}>&nbsp;</div>;
};

const Title = ({ children, className }: NativeProps) => {
  const cls = classNames('text-5xl font-medium', className);
  return <div className={cls}>{children}</div>;
};

const Subtitle = ({ children }: NativeProps) => {
  return <div className='mt-5 text-lg font-light tracking-widest'>{children}</div>;
};

const ArrowButton = ({ href, className }: { href: string } & NativeProps) => {
  const cls = classNames('inline-block px-5 py-2.5 rounded-full my-10 border border-gray-800', className);
  return (
    <a href={href} className={cls}>
      <svg width={52} height={12} xmlns='http://www.w3.org/2000/svg'>
        <g fill='currentColor' fillRule='evenodd'>
          <path fillRule='nonzero' d='M44 5.5v1H0v-1z' />
          <path d='m40.5 0 11 6-11 6z' />
        </g>
      </svg>
    </a>
  );
};

const Index = () => (
  <Layout>
    {/* hero section */}
    <div style={{ background: 'url(/banner.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <div className='md:w-1/2 xl:w-1/3 2xl:w-1/4 py-20'>
          <div className='text-7xl font-bold leading-tight text-center sm:text-left'>
            专注
            <span className='text-indigo-600'>AI教育</span>
            设计系统
          </div>
          <Subtitle>旨在统一UBT教育项目的产品设计风格，具备高自由度的多端适配开发规范方案和开箱即用的 React 组件库设计</Subtitle>
          <Space className='my-10' justify='start'>
            <Link href='/components/button/'>
              <a>
                <Button size='large' type='primary'>
                  组件文档
                </Button>
              </a>
            </Link>
            <Link href='/docs/quick-start/'>
              <a>
                <Button size='large'>开始使用</Button>
              </a>
            </Link>
          </Space>
          <Img src='/banner_fast.png' alt='' />
        </div>
      </div>
    </div>

    {/* 通用元素 */}
    <div style={{ background: 'url(/common_elements.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Section>
          <Title>通用元素</Title>
          <Subtitle>通用元素是创建整体界面布局,端到端用户体验所需的基础视觉元素</Subtitle>
          <Divider />
          <ArrowButton href='/components/button/' />
        </Section>
      </div>
    </div>

    {/* 布局 */}
    <div style={{ background: 'url(/layout.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Section className='ml-auto text-right'>
          <Title>布局</Title>
          <Subtitle>模块和元素之间的空间组合定义,协助进行页面级整体布局,信息传达的层级体验</Subtitle>
          <Divider className='ml-auto' />
          <ArrowButton href='/components/divider/' />
        </Section>
      </div>
    </div>

    {/* 导航 */}
    <div style={{ background: 'url(/navigation.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Section className='text-white'>
          <Title>导航</Title>
          <Subtitle>用户依赖导航,在各个功能页面间进行跳转,使多级结构变得有序可循</Subtitle>
          <Divider className='border-white' />
          <ArrowButton className='border-white text-white' href='/components/breadcrumb/' />
        </Section>
      </div>
    </div>

    {/* 数据录入 */}
    <div style={{ background: 'url(/data_entry.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Section className='ml-auto text-right'>
          <Title>数据录入</Title>
          <Subtitle>允许用户从选项中进行单个选择 多个选择、开关等操作</Subtitle>
          <Divider className='ml-auto' />
          <ArrowButton href='/components/checkbox/' />
        </Section>
      </div>
    </div>

    {/* 数据展示 */}
    <div style={{ background: 'url(/data_display_and_feedback.png) center' }}>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Space>
          <Section className='text-white'>
            <Title>数据展示</Title>
            <Subtitle>数据的有利展示方式,相似信息的内容分组展示, 或重要信息的突出显示</Subtitle>
            <Divider className='border-white' />
            <ArrowButton className='border-white text-white' href='/components/badge/' />
          </Section>
          <Section className='ml-auto text-right'>
            <Title>反馈</Title>
            <Subtitle>用户操作给予及时反馈,保证信息可读性和 可视化, 提升用户体验</Subtitle>
            <Divider className='ml-auto' />
            <ArrowButton href='/components/modal/' />
          </Section>
        </Space>
      </div>
    </div>

    {/* 文档 */}
    <div className='py-20'>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <Title className='mb-10'>文档</Title>
        <div className='grid sm:grid-cols-3 gap-5'>
          {blogData.map((item, index) => {
            return (
              <a href={item.url} key={`${item.title}${index}`}>
                <Img className='rounded-lg hover:shadow-lg' src={item.image} alt='' />
                <div className='p-5'>
                  <div className='font-bold text-2xl'>{item.title}</div>
                  <div className='mt-2 opacity-70'>{item.description}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>

    {/* footer */}
    <div className='bg-gray-700 text-white py-5'>
      <div className='max-w-screen-2xl mx-auto px-5'>
        <div className='flex justify-between flex-col sm:flex-row'>
          <div className='mb-5 sm:mb-0 text-center sm:text-left'>@2012-2022 Ubtech Robotics Corp.All rights reserved</div>
          <div className='text-center sm:text-right'>
            <a href='https://beian.miit.gov.cn/' target='_blank' rel='nofollow noopener noreferrer'>
              粤ICP备13036544号
            </a>
            &nbsp; 深圳市优必选科技股份有限公司
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
