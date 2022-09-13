import React, { useState } from 'react';
import { Layout, Typography, Breadcrumb, Menu, Scrollbar } from '@ubt/udesign-ui';
import { LeftOutlined, PictureFilled, VoiceFilled, DataFilled, MenuOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

const { Header, Footer, Content, Sider } = Layout;

export default function LayoutPage() {
  const { Text } = Typography;

  const width = '200px';
  const collapsedWidth = '100px';
  const [collapsed, setCollapsed] = useState(true);

  const onbreak = (value: boolean) => {
    setCollapsed(!value);
  };

  const reback = (value: boolean) => {
    setCollapsed(!value);
  };
  return (
    <>
      <Demo.Page title='Layout 布局' description='协助进行页面级整体布局。'>
        <Demo.Block title='设计规则'></Demo.Block>
        <Demo.Block
          title='功能色'
          description={
            <>
              <strong>一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。</strong>
              <br />
              <br />
              *顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。
              <br />
              *顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。
              <br />
              *顶部导航高度的范围计算公式为：48+8n。
              <br />
              *侧边导航宽度的范围计算公式：200+8n。
            </>
          }
        ></Demo.Block>
        <Demo.Block
          title='交互'
          description={
            <>
              *一级导航和末级的导航需要在可视化的层面被强调出来；
              <br />
              *当前项应该在呈现上优先级最高；
              <br />
              *当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
              <br />
              *左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。
            </>
          }
        ></Demo.Block>
        <Demo.Block
          title='视觉'
          description={
            <>
              <strong>*大色块强调</strong> <br />
              建议用于底色为深色系时，当前页面父级的导航项。
              <br /> <br />
              <strong>*高亮火柴棍 </strong> <br />
              当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。
              <br />
              <br />
              <strong>*字体高亮变色</strong>
              <br />
              从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。
              <br /> <br />
              <strong>*字体放大</strong>
              <br />
              12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。
            </>
          }
        ></Demo.Block>
        <Demo.Block
          title='组件概述'
          description={
            <>
              * <Text code>Layout</Text>：布局容器，其下可嵌套 <Text code>Header</Text> <Text code>Sider</Text> <Text code>Content</Text> <Text code>Footer</Text> 或 <Text code>Layout</Text> 本身，可以放在任何父容器中。
              <br />* <Text code>Header</Text>：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 <Text code>Layout</Text> 中。
              <br />* <Text code>Sider</Text>：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 <Text code>Layout</Text> 中。
              <br />* <Text code>Content</Text>：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <Text code>Layout</Text> 中。
              <br />* <Text code>Footer</Text>：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <Text code>Layout</Text> 中。
            </>
          }
        ></Demo.Block>
        <Demo.Block title='代码演示'></Demo.Block>
        <Demo.Block
          className='flex flex-col gap-12 text-center'
          title='排版'
          description={
            <>
              <strong>典型的页面布局。</strong>
            </>
          }
        >
          <Layout className='bg-white text-white'>
            <Header className='h-16' style={{ background: '#b5befc', lineHeight: '64px' }}>
              Header
            </Header>
            <Content className='h-52' style={{ background: '#7284fb', lineHeight: '208px' }}>
              Content
            </Content>
            <Footer className='py-6  px-12' style={{ background: '#b5befc' }}>
              Footer
            </Footer>
          </Layout>

          <Layout className='bg-white text-white'>
            <Header className='h-16' style={{ background: '#b5befc', lineHeight: '64px' }}>
              Header
            </Header>
            <Layout hasSider className='h-52'>
              <Sider className='w-52' style={{ backgroundColor: 'rgba(114, 132, 251, 0.7)', lineHeight: '208px' }}>
                Sider
              </Sider>
              <Content style={{ background: '#7284fb', lineHeight: '208px' }}>Content</Content>
            </Layout>
            <Footer className='py-6  px-12' style={{ background: '#b5befc' }}>
              Footer
            </Footer>
          </Layout>

          <Layout className='bg-white text-white'>
            <Header className='h-16' style={{ background: '#b5befc', lineHeight: '64px' }}>
              Header
            </Header>
            <Layout hasSider className='h-52'>
              <Content style={{ background: '#7284fb', lineHeight: '208px' }}>Content</Content>
              <Sider className='w-52' style={{ backgroundColor: 'rgba(114, 132, 251, 0.7)', lineHeight: '208px' }}>
                Sider
              </Sider>
            </Layout>
            <Footer className='py-6  px-12' style={{ background: '#b5befc' }}>
              Footer
            </Footer>
          </Layout>

          <Layout hasSider className='bg-white text-white'>
            <Sider className='w-52' style={{ backgroundColor: 'rgba(114, 132, 251, 0.7)', lineHeight: '320px' }}>
              Sider
            </Sider>
            <Layout>
              <Header className='h-16' style={{ background: '#b5befc', lineHeight: '64px' }}>
                Header
              </Header>
              <Content className='h-52' style={{ background: '#7284fb', lineHeight: '208px' }}>
                Content
              </Content>
              <Footer className='py-6  px-12' style={{ background: '#b5befc' }}>
                Footer
              </Footer>
            </Layout>
          </Layout>
        </Demo.Block>
        <Demo.Block
          className='layout-menu'
          title='上中下布局'
          description={
            <>
              最基本的『上-中-下』布局。
              <br />
              一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
            </>
          }
        >
          <Layout>
            <Header className='h-16' style={{ paddingLeft: '125px', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'rgba(114,132,251,.8)' }}>
              <div className='h-10 mx-6' style={{ width: '150px', background: '#D6DCFF' }}></div>
              <Menu
                mode='horizontal'
                style={{
                  alignItems: 'center',
                  '--ud-menu-horizontal-gap': '0',
                  '--ud-menu-item-background-active': '#5561D4',
                  '--ud-menu-item-background-hover': '#5561D4',
                  '--ud-menu-item-background': 'transparent',
                  '--ud-menu-item-color-active': '#fff',
                  '--ud-menu-item-color-hover': '#fff',
                }}
                className='text-white h-full'
              >
                <Menu.Item name='1' className='h-full'>
                  Nav 1
                </Menu.Item>
                <Menu.Item name='2' className='h-full'>
                  Nav 2
                </Menu.Item>
                <Menu.Item name='3' className='h-full'>
                  Nav 3
                </Menu.Item>
                <Menu.Item name='4' className='h-full'>
                  Nav 4
                </Menu.Item>
                <Menu.Item name='5' className='h-full'>
                  Nav 5
                </Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px', textAlign: 'left', background: '#f2f4fa' }}>
              <Breadcrumb style={{ margin: '16px 0', fontSize: '14px' }}>
                <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                Content
              </div>
            </Content>
            <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
              &copy;2022 Ubtech Robotics Corp. All rights reserved
            </Footer>
          </Layout>
        </Demo.Block>
        <Demo.Block title='顶部-侧边布局-通栏' description='同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。'>
          <Layout>
            <Header className='h-16' style={{ background: 'rgba(114,132,251,.8)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
              <div className='h-10 mx-6' style={{ width: '150px', background: '#D6DCFF' }}></div>
              <Menu
                mode='horizontal'
                style={{
                  alignItems: 'center',
                  '--ud-menu-horizontal-gap': '0',
                  '--ud-menu-item-background-active': '#5561D4',
                  '--ud-menu-item-background-hover': '#5561D4',
                  '--ud-menu-item-background': 'transparent',
                  '--ud-menu-item-color-active': '#fff',
                  '--ud-menu-item-color-hover': '#fff',
                }}
                className='text-white h-full'
              >
                <Menu.Item name='1' className='h-full'>
                  Nav 1
                </Menu.Item>
                <Menu.Item name='2' className='h-full'>
                  Nav 2
                </Menu.Item>
                <Menu.Item name='3' className='h-full'>
                  Nav 3
                </Menu.Item>
                <Menu.Item name='4' className='h-full'>
                  Nav 4
                </Menu.Item>
                <Menu.Item name='5' className='h-full'>
                  Nav 5
                </Menu.Item>
              </Menu>
            </Header>
            <Layout hasSider>
              <Sider style={{ textAlign: 'center', backgroundColor: '#fff', paddingTop: '40px', display: 'inline-block' }}>
                <Menu radius mode='inline' hasLine defaultActiveKey='2' className='w-60 border-r inline-block menu-inline' style={{ '--ud-menu-inline-submenu-item-background': '#fff' }}>
                  <Menu.Submenu name='一' icon={<PictureFilled className='text-xl mr-2' />} title='标题一' style={{ width: '100%' }}>
                    <Menu.Item name='1'>Option 1</Menu.Item>
                    <Menu.Item name='2'>Option 2</Menu.Item>
                    <Menu.Item name='3'>Option 3</Menu.Item>
                  </Menu.Submenu>
                  <Menu.Submenu name='二' icon={<VoiceFilled className='text-xl mr-2' />} title='标题二' style={{ width: '100%' }}>
                    <Menu.Item name='9'>Option 1</Menu.Item>
                    <Menu.Item name='8'>Option 2</Menu.Item>
                    <Menu.Item name='7'>Option 3</Menu.Item>
                  </Menu.Submenu>
                  <Menu.Submenu name='三' icon={<DataFilled className='text-xl mr-2' />} title='标题三' style={{ width: '100%' }}>
                    <Menu.Item name='4'>Option 1</Menu.Item>
                    <Menu.Item name='5'>Option 2(disabled)</Menu.Item>
                    <Menu.Item name='6'>Option 3</Menu.Item>
                  </Menu.Submenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0  40px 30px', textAlign: 'left', background: '#f2f4fa' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: '14px' }}>
                  <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                  <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content>
                  <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                    Content
                  </div>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Demo.Block>
        <Demo.Block title='顶部-侧边布局' description='拥有顶部导航及侧边栏的页面，多用于展示类网站。'>
          <Layout>
            <Header className='h-16' style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'rgba(114,132,251,.8)' }}>
              <div className='h-10 mx-6' style={{ width: '150px', background: '#D6DCFF' }}></div>
              <Menu
                mode='horizontal'
                style={{
                  alignItems: 'center',
                  '--ud-menu-horizontal-gap': '0',
                  '--ud-menu-item-background-active': '#5561D4',
                  '--ud-menu-item-background-hover': '#5561D4',
                  '--ud-menu-item-background': 'transparent',
                  '--ud-menu-item-color-active': '#fff',
                  '--ud-menu-item-color-hover': '#fff',
                }}
                className='text-white h-full'
              >
                <Menu.Item name='1' className='h-full'>
                  Nav 1
                </Menu.Item>
                <Menu.Item name='2' className='h-full'>
                  Nav 2
                </Menu.Item>
                <Menu.Item name='3' className='h-full'>
                  Nav 3
                </Menu.Item>
                <Menu.Item name='4' className='h-full'>
                  Nav 4
                </Menu.Item>
                <Menu.Item name='5' className='h-full'>
                  Nav 5
                </Menu.Item>
              </Menu>
            </Header>
            <Layout style={{ padding: '0 40px', background: '#f2f4fa' }}>
              <Breadcrumb style={{ margin: '16px 0', fontSize: '14px' }}>
                <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Layout hasSider style={{ textAlign: 'left' }}>
                <Sider style={{ textAlign: 'center', padding: '24px 0', background: '#ffff', width }}>
                  <Menu radius>
                    <Menu.Item name='1' style={{ width: '100%', borderRadius: '100px 0 0 100px', height: '60px' }}>
                      <PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />
                      <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item name='2' style={{ width: '100%', borderRadius: '100px 0 0 100px', height: '60px' }}>
                      <VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} /> Option 2
                    </Menu.Item>
                    <Menu.Item name='3' style={{ width: '100%', borderRadius: '100px 0 0 100px', height: '60px' }}>
                      <DataFilled style={{ margin: '0 10px', fontSize: '22px' }} /> Option 3
                    </Menu.Item>
                    <Menu.Item name='4' style={{ width: '100%', borderRadius: '100px 0 0 100px', height: '60px' }}>
                      <PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} /> Option 4
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Content style={{ background: '#f2f4fa' }}>
                  <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                    Content
                  </div>
                </Content>
              </Layout>
            </Layout>
            <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
              &copy;2022 Ubtech Robotics Corp. All rights reserved
            </Footer>
          </Layout>
        </Demo.Block>

        <Demo.Block
          title='侧边布局'
          description={
            <>
              侧边两列式布局。页面横向空间有限时，侧边导航可收起。
              <br />
              侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部分。
            </>
          }
        >
          <Layout hasSider>
            <Sider trigger={<LeftOutlined />} onCollapse={onbreak} collapsed={collapsed} style={{ background: '#7284FB ', width: collapsed ? width : collapsedWidth }}>
              <div className='h-10 mx-6' style={{ margin: '12px 25px 0 25px', width: collapsed ? '150px' : '50px', background: '#D6DCFF', transition: 'all .2s' }}></div>
              <div style={{ flexGrow: '1', textAlign: 'center', marginTop: '30px' }}>
                <Menu radius isCollapsed={!collapsed} style={{ '--ud-menu-item-background': '#7284fb', color: '#fff', '--ud-menu-item-color-hover': '#FFF', '--ud-menu-item-color-active': '#FFF', '--ud-color-primary-light': '#4F5BFF' }}>
                  <Menu.Item name='1' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />} style={{}}>
                    Option 1
                  </Menu.Item>
                  <Menu.Item name='2' icon={<VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} />} style={{}}>
                    Option 2
                  </Menu.Item>
                  <Menu.Item name='3' icon={<DataFilled style={{ margin: '0 10px', fontSize: '22px' }} />} style={{}}>
                    Option 3
                  </Menu.Item>
                  <Menu.Item name='4' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '25px' }} />} style={{}}>
                    Option 4
                  </Menu.Item>
                </Menu>
              </div>
            </Sider>
            <Layout style={{ padding: '0 20px', background: '#f2f4fa' }}>
              <Breadcrumb style={{ margin: '16px 0', fontSize: '14px' }}>
                <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Layout hasSider style={{ textAlign: 'left' }}>
                <Content>
                  <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                    Content
                  </div>
                </Content>
              </Layout>
              <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
                &copy;2022 Ubtech Robotics Corp. All rights reserved
              </Footer>
            </Layout>
          </Layout>
        </Demo.Block>
        <Demo.Block
          title='自定义触发器'
          description={
            <>
              要使用自定义触发器，可以设置 <Text code>trigger = {'{ null }'}</Text> 来隐藏默认设定。
            </>
          }
        >
          <Layout hasSider>
            <Sider triggerTop={<MenuOutlined />} trigger={<LeftOutlined />} onCollapse={reback} collapsed={collapsed} style={{ background: '#7284fb', width: collapsed ? width : collapsedWidth, justifyContent: 'space-between' }}>
              <div className='h-10 mx-6' style={{ margin: '12px 25px 0 25px', width: collapsed ? '150px' : '50px', background: '#D6DCFF', transition: 'all 0.2s' }}></div>
              <div style={{ textAlign: 'center', overflow: 'hidden', marginTop: '30px', flexGrow: '1' }}>
                <Menu radius isCollapsed={!collapsed} style={{ '--ud-menu-item-background': '#7284fb', color: '#fff', '--ud-menu-item-color-hover': '#FFF', '--ud-menu-item-color-active': '#FFF', '--ud-color-primary-light': '#4F5BFF' }}>
                  <Menu.Item name='1' className='flex items-center' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                    <span>Option 1</span>
                  </Menu.Item>
                  <Menu.Item name='2' className='flex items-center' icon={<VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                    Option 2
                  </Menu.Item>
                  <Menu.Item name='3' className='flex items-center' icon={<DataFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                    Option 3
                  </Menu.Item>
                  <Menu.Item name='4' className='flex items-center' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '25px' }} />}>
                    Option 4
                  </Menu.Item>
                </Menu>
              </div>
            </Sider>
            <Layout>
              <Header className='h-16' style={{ background: '#fff', padding: '0 20px' }}></Header>
              <Layout hasSider style={{ textAlign: 'left', padding: '20px 20px 0  20px', background: '#f2f4fa' }}>
                <Content>
                  <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                    Content
                  </div>
                </Content>
              </Layout>
              <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
                &copy;2022 Ubtech Robotics Corp. All rights reserved
              </Footer>
            </Layout>
          </Layout>
        </Demo.Block>

        <Demo.Block title='固定头部' description={<>一般用于固定顶部导航，方便页面切换。</>}>
          <div className='translate-y-0 translate-y-0'>
            <Layout style={{ height: '500px', overflow: 'auto' }}>
              <Header className='h-16' style={{ position: 'fixed', overflow: 'hidden', width: '100%', display: 'flex', alignItems: 'center', background: '#7284FB' }}>
                <div className='h-10 mx-6' style={{ width: '150px', background: '#D6DCFF' }}></div>
                <Menu
                  mode='horizontal'
                  style={{
                    alignItems: 'center',
                    '--ud-menu-horizontal-gap': '0',
                    '--ud-menu-item-background-active': '#5561D4',
                    '--ud-menu-item-background-hover': '#5561D4',
                    '--ud-menu-item-background': 'transparent',
                    '--ud-menu-item-color-active': '#fff',
                    '--ud-menu-item-color-hover': '#fff',
                  }}
                  className='text-white h-full'
                >
                  <Menu.Item name='1' className='h-full'>
                    Nav 1
                  </Menu.Item>
                  <Menu.Item name='2' className='h-full'>
                    Nav 2
                  </Menu.Item>
                  <Menu.Item name='3' className='h-full'>
                    Nav 3
                  </Menu.Item>
                  <Menu.Item name='4' className='h-full'>
                    Nav 4
                  </Menu.Item>
                  <Menu.Item name='5' className='h-full'>
                    Nav 5
                  </Menu.Item>
                </Menu>
              </Header>
              <Scrollbar hover style={{ marginTop: '64px', height: '500px' }}>
                <Content style={{ padding: '16px 50px 0 50px', textAlign: 'left', background: '#f2f4fa' }}>
                  <Breadcrumb style={{ marginBottom: '16px', fontSize: '14px' }}>
                    <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                    <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                  </Breadcrumb>
                  <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                    Content
                  </div>
                </Content>
                <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
                  &copy;2022 Ubtech Robotics Corp. All rights reserved
                </Footer>{' '}
              </Scrollbar>
            </Layout>
          </div>
        </Demo.Block>
        <Demo.Block title='固定侧边栏' description={<>当内容较长时，使用固定侧边栏可以提供更好的体验。</>}>
          <div>
            <Layout hasSider>
              <Sider style={{ transform: 'translate(0, 0)', background: '#7284fb ' }}>
                <div className='h-10 mx-6' style={{ margin: '12px 25px', width: '150px', background: '#D6DCFF' }}></div>
                <Scrollbar style={{ flexGrow: '0', textAlign: 'center', height: '456px', '--ud-scrollbar-thumb-color': '#9cacff' }}>
                  <Menu
                    radius
                    hasLine
                    mode='vertical'
                    style={{
                      alignItems: 'center',
                      '--ud-menu-item-background': '#7284fb',
                      color: '#fff',
                      '--ud-menu-item-color-hover': '#FFF',
                      '--ud-menu-item-color-active': '#FFF',
                      '--ud-color-primary-light': '#4F5BFF',
                    }}
                  >
                    <Menu.Item name='1' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 1
                    </Menu.Item>
                    <Menu.Item name='2' className='shrink-0' icon={<VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 2
                    </Menu.Item>
                    <Menu.Item name='3' className='shrink-0' icon={<DataFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 3
                    </Menu.Item>
                    <Menu.Item name='4' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 4
                    </Menu.Item>
                    <Menu.Item name='5' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 1
                    </Menu.Item>
                    <Menu.Item name='6' className='shrink-0' icon={<VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 2
                    </Menu.Item>
                    <Menu.Item name='7' className='shrink-0' icon={<DataFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 3
                    </Menu.Item>
                    <Menu.Item name='8' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 4
                    </Menu.Item>
                    <Menu.Item name='5' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 1
                    </Menu.Item>
                    <Menu.Item name='6' className='shrink-0' icon={<VoiceFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 2
                    </Menu.Item>
                    <Menu.Item name='7' className='shrink-0' icon={<DataFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 3
                    </Menu.Item>
                    <Menu.Item name='8' className='shrink-0' icon={<PictureFilled style={{ margin: '0 10px', fontSize: '22px' }} />}>
                      Option 4
                    </Menu.Item>
                  </Menu>
                </Scrollbar>
              </Sider>
              <Layout style={{ padding: '0 20px', background: '#f2f4fa' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: '14px' }}>
                  <Breadcrumb.Item href=''>Home</Breadcrumb.Item>
                  <Breadcrumb.Item href=''>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout hasSider style={{ textAlign: 'left' }}>
                  <Content>
                    <div className='bg-white text-black p-6' style={{ height: '428px' }}>
                      Content
                    </div>
                  </Content>
                </Layout>
                <Footer className='py-6  px-12' style={{ textAlign: 'center', background: '#f2f4fa' }}>
                  &copy;2022 Ubtech Robotics Corp. All rights reserved
                </Footer>
              </Layout>
            </Layout>
          </div>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}

LayoutPage.getLayout = getLayout;
