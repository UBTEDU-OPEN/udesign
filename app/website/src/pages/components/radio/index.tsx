import React, { useState } from 'react';
import { Button, Radio, Space } from '@ubt/udesign-ui';
import { Demo } from '../../../demo';
import styles from './index.module.scss';

export default function RadioPage() {
  const [checked, setChecked] = useState(false);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState<string | number>('2');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('A');
  const [value6, setValue6] = useState('');

  return (
    <div className={styles['radio-root']}>
      <Demo.Page title='Radio 单选框' description='用于在选中和非选中状态之间进行切换。'>
        <Demo.Block title='基础用法' description='通过 defaultChecked 指定单选框的初始勾选状态。'>
          <Radio>单选框</Radio>
          <Radio defaultChecked>单选框</Radio>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='通过设置 disabled 属性可以禁用单选框。'>
          <Radio disabled>单选框</Radio>
          <Radio defaultChecked disabled>
            单选框
          </Radio>
        </Demo.Block>
        <Demo.Block title='按钮样式' description='Radio.Button可以使用按钮样式'>
          <Radio.Group
            name='button'
            value={value3}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue3(event.nativeEvent.target?.value);
            }}
          >
            <>
              <Radio.Button value='a' disabled>
                Hangzhou
              </Radio.Button>
              <Radio.Button value='b'>Shanghai</Radio.Button>
              <Radio.Button value='c'>Beijing</Radio.Button>
              <Radio.Button value='d'>Chengdu</Radio.Button>
            </>
          </Radio.Group>
        </Demo.Block>
        <Demo.Block title='置顶是否选中' description='checked 值指定是否选中'>
          <Radio checked={checked}>单选框</Radio>
          <Button onClick={() => setChecked(!checked)}>{String(checked)}</Button>
        </Demo.Block>
        <Demo.Block title='单选组合' description='一组互斥的 Radio 配合使用'>
          <Radio.Group
            options={['A', 'B', 'C']}
            name={'group'}
            value={value1}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue1(event.nativeEvent.target?.value);
            }}
          />
        </Demo.Block>
        <Demo.Block title='默认值' description='defaultValue 初始化默认值,defaultValue会被value 覆盖'>
          <Radio.Group
            options={['A', 'B', 'C']}
            name={'groupdefault'}
            value={value5}
            defaultValue='A'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue5(event.nativeEvent.target?.value);
            }}
          />
        </Demo.Block>
        <Demo.Block title='禁用组合中的部分选项' description='option的disabled属性禁用特定单选框'>
          <Radio.Group
            options={[
              {
                value: 'A',
                label: 'A',
                disabled: true,
              },
              {
                value: 'B',
                label: 'B',
                disabled: false,
              },
              {
                value: 'C',
                label: 'C',
                disabled: false,
              },
            ]}
            name={'disabledsingle'}
            value={value4}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue4(event.nativeEvent.target?.value);
            }}
          />
        </Demo.Block>
        <Demo.Block title='禁用一组单选框' description='Radio 的disabled 属性可以禁用一组单选框，与option的disabled 组合，options 的优先级更高'>
          <Radio.Group
            options={[
              {
                value: 'A',
                label: 'A',
              },
              {
                value: 'B',
                label: 'B',
              },
              {
                value: 'C',
                label: 'C',
                disabled: false,
              },
            ]}
            name={'disabledgroup'}
            value={value6}
            disabled
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue6(event.nativeEvent.target?.value);
            }}
          />
        </Demo.Block>
        <Demo.Block title='垂直排列' description='垂直的 Radio.Group'>
          <Radio.Group
            name={'vertical'}
            // value={value2}
            defaultValue={'2'}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
            //   setValue2(event.nativeEvent.target?.value);
            // }}
          >
            <Space direction='vertical'>
              <Radio value={'1'} checked={value2 === '1'}>
                Option A
              </Radio>
              <Radio value={'2'} checked={value2 === '2'}>
                Option B
              </Radio>
              <Radio value={'3'} checked={value2 === '3'}>
                Option C
              </Radio>
            </Space>
          </Radio.Group>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}
