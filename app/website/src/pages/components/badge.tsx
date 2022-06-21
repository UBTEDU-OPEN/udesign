import React from 'react';
import { Avatar, Badge, CheckIcon, SettingIcon } from '@ubt/udesign-ui-alpha';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function BadgePage() {
  return (
    <>
      <Demo.Page title='Badge 徽标' description='在右上角展示徽标数字或小红点。'>
        <Demo.Block title='基础用法' description='设置 content 属性后，Badge 会在子元素的右上角显示对应的徽标，也可以通过 Badge.Dot 来显示小红点。'>
          <Space>
            <Badge content='5'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='10'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='hot'>
              <Avatar shape='square' />
            </Badge>
            <Badge content={Badge.Dot}>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='最大值' description='设置 max 属性后，当 content 的数值超过最大值时，会自动显示为 {max}+。'>
          <Space>
            <Badge content='20' max='9'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='50' max='20'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='200' max='99'>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='showZero' description='当 content 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。'>
          <Badge content='0' showZero>
            <Avatar shape='square' />
          </Badge>
        </Demo.Block>
        <Demo.Block title='自定义徽标内容' description='通过 content 插槽可以自定义徽标的内容，比如插入一个图标。'>
          <Space>
            <Badge content={<CheckIcon />}>
              <Avatar shape='square' />
            </Badge>
            <Badge content={<SettingIcon />}>
              <Avatar shape='square' />
            </Badge>
            <Badge content={<ArrowDownOutlined />}>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='尺寸' description='通过 size 属性指定尺寸，可选 default, small'>
          <Space>
            <Badge content='5' size='default'>
              <Avatar shape='square' />
            </Badge>
            <Badge content='5' size='small'>
              <Avatar shape='square' />
            </Badge>
          </Space>
        </Demo.Block>
        <Demo.Block title='title' description='通过 title 属性指定鼠标hover时的提示文案'>
          <Badge content='5' title='我是title'>
            <Avatar shape='square' />
          </Badge>
        </Demo.Block>
        <Demo.Block title='独立展示' description='当 Badge 没有子元素时，会作为一个独立的元素进行展示。'>
          <Space>
            <Badge content='20' />
            <Badge content='120' />
            <Badge content='有更新啦' />
            <Badge content='NEW' />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
