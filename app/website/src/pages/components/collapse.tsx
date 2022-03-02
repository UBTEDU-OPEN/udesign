import React from 'react';
import { Demo } from 'demo';
import { Collapse } from '@ubt/udesign-ui-alpha';

export default function CollapsePage() {
  return (
    <>
      <Demo.Page title='Collapse 折叠面板' description='将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。' todo='增加动画效果'>
        <Demo.Block title='基础用法' description='通过 activeKey 控制展开的面板列表'>
          <Collapse activeKey={['1']}>
            <Collapse.Item title='标题1' name='1'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题2' name='2'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='手风琴' description='通过 accordion 可以设置为手风琴模式，最多展开一个面板，此时 activeKey 为字符串格式。'>
          <Collapse accordion activeKey='1'>
            <Collapse.Item title='标题1' name='1'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题2' name='2'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过 disabled 属性来禁用单个面板。'>
          <Collapse accordion activeKey='1'>
            <Collapse.Item title='标题1' name='1'>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题2' name='2' disabled>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
            <Collapse.Item title='标题3' name='3' disabled>
              代码是写出来给人看的，附带能在机器上运行
            </Collapse.Item>
          </Collapse>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
