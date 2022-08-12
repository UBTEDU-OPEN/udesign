import React from 'react';
import { Collapse } from '@ubt/udesign-ui';
import { DownOutlined, UpOutlined } from '@ubt/udesign-icons';
import { Demo } from '../../demo';

export default function CollapsePage() {
  return (
    <>
      <Demo.Page title='Collapse 折叠面板' description='可以折叠/展开的内容区域。'>
        <Demo.Block title='何时使用' description='*对复杂区域进行分组和隐藏，保持页面的整洁。手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。' />
        <Demo.Block title='基础用法' description='*默认的折叠面板样式，可以同时展开多个面板。'>
          <Collapse headerStyle={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px' }} bodyStyle={{ backgroundColor: '#F3F4F8', borderRadius: '25px' }}>
            <Collapse.Item title='这里是标题1' name='1'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题2' name='2'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题3' name='3'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='手风琴' description='每次只能打开一个 tab。'>
          <Collapse accordion headerStyle={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px' }} bodyStyle={{ backgroundColor: '#F3F4F8', borderRadius: '25px' }}>
            <Collapse.Item title='这里是标题1' name='1'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题2' name='2'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题3' name='3'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='有边框样式' description='一套有边框的简洁样式。'>
          <Collapse
            bordered
            radius
            defaultActiveKey={['1', '2', '3']}
            headerStyle={{ '--ud-collapse-item-header-background-color': '#edf1ff', '--ud-collapse-item-header-active-background-color': '#fff', '--ud-collapse-item-header-active-border-radius': '30px', marginBottom: '10px' }}
            bodyStyle={{ backgroundColor: '#fff', borderRadius: '25px' }}
          >
            <Collapse.Item title='这里是标题1' name='1'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题2' name='2'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题3' name='3'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
          </Collapse>
        </Demo.Block>

        <Demo.Block title='隐藏箭头样式' description='隐藏箭头。'>
          <Collapse headerStyle={{ backgroundColor: '#edf1ff', borderRadius: '30px', marginBottom: '10px' }} bodyStyle={{ backgroundColor: '#F3F4F8', borderRadius: '25px' }}>
            <Collapse.Item showArrow={false} title='这里是标题1' name='1'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item showArrow={false} title='这里是标题2' name='2'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item showArrow={false} title='这里是标题3' name='3'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='自定义面板' description='自定义各个面板的背景色、圆角、边距和图标。'>
          <Collapse activeKey='1' closeIcon={<DownOutlined />} expandIcon={<UpOutlined />} headerStyle={{ background: '#fff' }} bodyStyle={{ background: '#EDF1FF' }}>
            <Collapse.Item title='这里是标题1' name='1'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题2' name='2'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
            <Collapse.Item title='这里是标题3' name='3'>
              是一个致力于提升“用户”和“设计者”使用体验的多端设计语言。产品经理、交互设计师、视觉设计师、前端工程师、开发工程师等角色，在此统称为“设计者”，利用统一的规范进行设计赋能，帮助“设计者”提高多端产品体验和研发效率。U
              Design高度重视“设计者”的使用体验，践行敏捷开发的设计模式。
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
