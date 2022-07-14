import React, { useState } from 'react';
import { Button, Checkbox, Row, Col } from '@ubt/udesign-ui';
import { Demo } from '../../demo';

export default function CheckboxPage() {
  const [checked, setChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(true);
  const [allvalue, setAllvalue] = useState<string[]>([]);
  const [allchecked, setAllchecked] = useState<boolean>(false);
  const optionsWithDisabled = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
  ];
  return (
    <div>
      <Demo.Page
        title='Checkbox 复选框'
        description={`在一组可选项中进行多项选择时；
      *单独使用可以表示两种状态之间的切换，和 switch 类似。
      *区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。`}
      >
        <Demo.Block title='基础用法' description='通过 defaultChecked 指定复选框的初始勾选状态。'>
          <Checkbox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log(event);
            }}
          >
            未选中
          </Checkbox>
          <Checkbox defaultChecked>已选中</Checkbox>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过设置 disabled 属性可以禁用复选框。'>
          <Checkbox disabled>复选框</Checkbox>
          <Checkbox defaultChecked disabled>
            复选框
          </Checkbox>
        </Demo.Block>
        <Demo.Block title='受控组件' description='组件是否选中完全取决于传入的 checked 值，配合 onChange 回调函数使用'>
          <div className='mb-4'>
            <Button onClick={() => setChecked(!checked)}>{checked ? 'unchecked' : 'checked'}</Button>
            <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'enable' : 'disable'}</Button>
          </div>
          <Checkbox checked={checked} disabled={disabled} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChecked((event.nativeEvent.target as HTMLInputElement)?.checked)}>
            复选框
          </Checkbox>
        </Demo.Block>
        <Demo.Block title='复选框组' description='通过在 CheckboxGroup 内部放置 Checkbox 元素，可以声明 Checkbox 组'>
          <Checkbox.Group
            defaultValue={['A']}
            name='group'
            onChange={(checkedValue: string[]) => {
              console.log(checkedValue);
            }}
          >
            <>
              <Checkbox value='A'>A</Checkbox>
              <Checkbox value='B'>B</Checkbox>
              <Checkbox value='C' disabled>
                C
              </Checkbox>
            </>
          </Checkbox.Group>
        </Demo.Block>
        <Demo.Block title='复选框组（数组方式）' description='复选框组可以通过 options 属性生成 Checkbox。'>
          <Checkbox.Group options={['A', 'B', 'C']} defaultValue={['A', 'B', 'C']} name='array1' />
          <Checkbox.Group options={['A', 'B', 'C']} name='array2' />
          <Checkbox.Group options={optionsWithDisabled} defaultValue={['A']} name='array3' disabled />
        </Demo.Block>
        <Demo.Block title='全选' description='在实现全选效果时，你可能会用到 indeterminate 属性。'>
          <Checkbox.Group
            defaultValue={['A']}
            value={allvalue}
            name='selectall'
            onChange={(selectedValue: string[]) => {
              setIndeterminate(!!selectedValue.length && selectedValue.length < 3);
              setAllchecked(selectedValue.length === 3);
            }}
          >
            <>
              <Checkbox value='A'>A</Checkbox>
              <Checkbox value='B'>B</Checkbox>
              <Checkbox value='C'>C</Checkbox>
            </>
          </Checkbox.Group>
          <Checkbox
            indeterminate={indeterminate}
            checked={allchecked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              console.log(event);
              setAllvalue((event.nativeEvent.target as HTMLInputElement)?.checked ? ['A', 'B', 'C'] : []);
              setIndeterminate(false);
              setAllchecked((event.nativeEvent.target as HTMLInputElement)?.checked);
            }}
          >
            全选
          </Checkbox>
        </Demo.Block>
        <Demo.Block title='布局' description='Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。'>
          <Checkbox.Group
            name='grid1'
            onChange={(checkedValue: string[]) => {
              console.log(checkedValue, 'checkedValue');
            }}
          >
            <div style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value='A'>A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value='B'>B</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value='C'>C</Checkbox>
                </Col>
              </Row>
            </div>
          </Checkbox.Group>
        </Demo.Block>
        <Demo.Block>
          <Checkbox.Group
            name='grid2'
            onChange={(checkedValue: string[]) => {
              console.log(checkedValue, 'checkedValue');
            }}
          >
            <div style={{ width: '100%' }}>
              <Row>
                <Col span={6}>
                  <Checkbox value='A'>A</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value='B'>B</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value='C'>C</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value='D'>D</Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox value='E'>E</Checkbox>
                </Col>
              </Row>
            </div>
          </Checkbox.Group>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}