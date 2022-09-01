import React from 'react';
import { Collapse } from '@ubt/udesign-ui';
import { DownOutlined, UpOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';

export default function CollapsePage() {
  return (
    <>
      <Demo.Page title='Collapse 折叠面板' description='可以折叠/展开的内容区域。'>
        <Demo.Block title='何时使用' description='*对复杂区域进行分组和隐藏，保持页面的整洁。手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。' />
        <Demo.Block title='基础用法' description='默认的折叠面板样式，可以同时展开多个面板。'>
          <Collapse>
            <Collapse.Item title='这里是标题1' name='1' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='2' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='3' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8 ', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='手风琴' description='每次只能打开一个。'>
          <Collapse accordion>
            <Collapse.Item title='这里是标题1' name='1' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='2' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='3' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='有边框样式' description='一套有边框的简洁样式。'>
          <Collapse defaultActiveKey={['1', '2', '3']} style={{ '--ud-collapse-item-border-radius': '20px', '--ud-collapse-item-border': '1px solid #7284FB', '--ud-collapse-item-border-background': '#fff' }}>
            <Collapse.Item
              title='这里是标题1'
              name='1'
              style={{
                '--ud-collapse-item-header-background': '#edf1ff',
                '--ud-collapse-item-header-border-radius': '30px',
                marginBottom: '10px',
                padding: '22px 40px',
                '--ud-collapse-item-header-border-radius-active': '0px',
                '--ud-collapse-item-header-border-bottom': '1px solid #ECF0F3',
              }}
            >
              <p style={{ padding: '22px 40px', backgroundColor: '#fff', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item
              title='这里是标题1'
              name='2'
              style={{
                '--ud-collapse-item-header-background': '#edf1ff',
                '--ud-collapse-item-header-border-radius': '30px',
                marginBottom: '10px',
                padding: '22px 40px',
                '--ud-collapse-item-header-border-bottom': '1px solid #ECF0F3',
                '--ud-collapse-item-header-border-radius-active': '0px',
              }}
            >
              <p style={{ padding: '22px 40px', backgroundColor: '#fff', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item
              title='这里是标题1'
              name='3'
              style={{
                '--ud-collapse-item-header-background': '#edf1ff',
                '--ud-collapse-item-header-border-radius': '30px',
                marginBottom: '10px',
                padding: '22px 40px',
                '--ud-collapse-item-header-border-bottom': '1px solid #ECF0F3',
                '--ud-collapse-item-header-border-radius-active': '0px',
              }}
            >
              <p style={{ padding: '22px 40px', backgroundColor: '#fff', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='隐藏箭头样式' description='隐藏箭头。'>
          <Collapse>
            <Collapse.Item showArrow={false} title='这里是标题1' name='1' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item showArrow={false} title='这里是标题1' name='2' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item showArrow={false} title='这里是标题1' name='3' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8 ', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='自定义面板' description='自定义各个面板的背景色、圆角、边距和图标。'>
          <Collapse defaultActiveKey='1' closeIcon={<DownOutlined />} expandIcon={<UpOutlined />}>
            <Collapse.Item title='这里是标题1' name='1' style={{ backgroundColor: '#fff', borderRadius: '0', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#EDF1FF' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='2' style={{ backgroundColor: '#fff', borderRadius: '0', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#EDF1FF' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='3' style={{ backgroundColor: '#fff', borderRadius: '0', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#EDF1FF ' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='受控' description='是否展开完全取决于传入的 activeKey 值，配合 onChange 回调函数使用。'>
          <Collapse activeKey='1'>
            <Collapse.Item title='这里是标题1' name='1' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='2' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
            <Collapse.Item title='这里是标题1' name='3' style={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px', padding: '22px 40px' }}>
              <p style={{ padding: '22px 40px', backgroundColor: '#F3F4F8 ', borderRadius: '30px' }}>
                是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
                Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
              </p>
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
