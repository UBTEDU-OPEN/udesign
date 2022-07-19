import React, { useState } from 'react';
import { Input, Space, Tag } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

const defaultTagList = [
  {
    label: 'Unremovable',
  },
  {
    label: 'Tag2',
    closeable: true,
  },
  {
    label: 'Tag3',
    closeable: true,
  },
];

export default function TagPage() {
  const [label, setLabel] = useState('');
  const [tagList, setTagList] = useState(defaultTagList);

  const handleAddTag = () => {
    if (!label) return;
    const newTagList = [...tagList];
    newTagList.push({ label });
    setTagList(newTagList);
  };

  return (
    <>
      <Demo.Page title='Tag 标签' description='进行标记和分类的小标签。'>
        <Demo.Block title='何时使用' description='用于标记事物的属性和维度，进行分类。' />
        <Demo.Block title='基础用法' description='默认标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。'>
          <Space>
            <Tag>Tag1</Tag>
            <Tag closeable>Tag2</Tag>
            <Tag closeable onClose={(v, e) => e.preventDefault()}>
              Prevent Default
            </Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='添加和删除' description='用数组生成一组标签，可以动态添加和删除。'>
          <Input style={{ width: 240 }} defaultValue={label} onChange={setLabel} onEnterPress={handleAddTag} placeholder='回车键入' />
          <br />
          <br />
          <Space wrap>
            {tagList.map((tag, index) => (
              <Tag key={index} closeable={tag.closeable}>
                {tag.label}
              </Tag>
            ))}
          </Space>
        </Demo.Block>
        <Demo.Block title='多彩标签' description='多种预设色彩的标签样式，用作不同场景使用。'>
          <Space wrap>
            <Tag checkable color='purple'>
              Purple/紫色
            </Tag>
            <Tag checkable color='red'>
              Red/红色
            </Tag>
            <Tag checkable color='orange'>
              Orange/橘色
            </Tag>
            <Tag checkable color='yellow'>
              Yellow/黄色
            </Tag>
            <Tag checkable color='green'>
              Green/绿色
            </Tag>
            <Tag checkable color='cyan'>
              Cyan/青色
            </Tag>
            <Tag checkable color='blue'>
              Blue/蓝色
            </Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='标签大小' description='通过 size 属性调整标签大小。'>
          <Space>
            <Tag size='small'>标签</Tag>
            <Tag>标签</Tag>
            <Tag size='large'>标签</Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='可关闭标签' description='添加 closeable 属性表示标签是可关闭的，关闭标签时会触发 close 事件，在 close 事件中可以执行隐藏标签的逻辑。'>
          <Tag closeable onClose={(value) => console.log('onClose', value)}>
            标签
          </Tag>
        </Demo.Block>
        <Demo.Block title='可选择标签' description='可通过 checkable 实现类似 Checkbox 的效果，点击切换选中效果。该组件为完全受控组件，不支持非受控用法。'>
          <Space>
            <Tag checkable defaultChecked>
              uCode
            </Tag>
            <Tag checkable>uDesign</Tag>
            <Tag checkable>uExplore</Tag>
            <Tag checkable>uSim</Tag>
          </Space>
        </Demo.Block>
        <Demo.Block title='自定义标签' description='如果预设值不能满足你的需求，可以设置为具体的色值。自定义色值不支持选中配色，需要自行处理。'>
          <Space>
            <Tag color='#f50' textColor='#fff'>
              #f50
            </Tag>
            <Tag color='#eee' textColor='#999'>
              #eee
            </Tag>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
