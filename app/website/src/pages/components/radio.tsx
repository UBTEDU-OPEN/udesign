import React, { useState } from 'react';
import { Button, Radio, Space } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import { getLayout } from '../../demo/getLayout';

export default function RadioPage() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [value1, setValue1] = useState('');
  return (
    <div>
      <Demo.Page title='Radio 单选框' description='用于在选中和非选中状态之间进行切换。'>
        <Demo.Block title='基础用法' description='默认的选框'>
          <Radio>单选框</Radio>
        </Demo.Block>
        <Demo.Block>
          <Radio defaultChecked>单选框</Radio>
        </Demo.Block>
        <Demo.Block title='禁用状态' description='选框不可用'>
          <Radio disabled>单选框</Radio>
          <Radio defaultChecked disabled>
            单选框
          </Radio>
        </Demo.Block>
        <Demo.Block title='单选组合' description='一组互斥的 Radio 配合使用'>
          <Radio.Group options={['A', 'B', 'C']} name={'group'} value={value1} />
        </Demo.Block>

        <Demo.Block title='垂直排列' description='垂直的 Radio.Group'>
          <Radio.Group name={'vertical'} defaultValue={'2'}>
            <Space direction='vertical'>
              <Radio value={'1'}>Option A</Radio>
              <Radio value={'2'}>Option B</Radio>
              <Radio value={'3'}>Option C</Radio>
              <Radio value={'more'}>more...</Radio>
            </Space>
          </Radio.Group>
        </Demo.Block>
        <Demo.Block title='多种单选框样式'>
          <Radio.Group
            options={[
              { label: 'A', value: 'A' },
              { label: 'B', value: 'B' },
              { label: 'C', value: 'C', disabled: true },
            ]}
            name={'group'}
            defaultValue='A'
          />
        </Demo.Block>
        <Demo.Block>
          <Radio.Group name='button' defaultValue='a'>
            <>
              <Radio.Button value='a'>uCode</Radio.Button>
              <Radio.Button value='b'>uDesign</Radio.Button>
              <Radio.Button value='c' disabled>
                uExplore
              </Radio.Button>
            </>
          </Radio.Group>
        </Demo.Block>
        <Demo.Block title='受控组件' description='checked 值指定是否选中， disabled 是否禁用'>
          <Space className='mb-4'>
            <Button onClick={() => setChecked(!checked)}>{checked ? 'unchecked' : 'checked'}</Button>
            <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'abled' : 'unabled'}</Button>
          </Space>
          <Radio checked={checked} disabled={disabled}>
            单选框
          </Radio>
        </Demo.Block>

        <Demo.Block title='多种状态' description='多种单选框样式的不同状态。'>
          <Radio.Group
            options={[
              { label: 'uCode', value: 'uCode' },
              { label: 'uDesign', value: 'uDesign' },
              { label: 'uExplore', value: 'uExplore' },
            ]}
            name={'groupdefault'}
            defaultValue='uCode'
          />
        </Demo.Block>
        <Demo.Block>
          <Radio.Group
            options={[
              {
                value: 'A',
                label: 'uCode',
              },
              {
                value: 'B',
                label: 'uDesign',
              },
              {
                value: 'C',
                label: 'uExplore',
                disabled: true,
              },
            ]}
            defaultValue='A'
            name={'disabledsingle'}
          />
        </Demo.Block>
        <Demo.Block>
          哪一款产品最好看？
          <Radio.Group name='button' defaultValue='a'>
            <Radio.Button value='a'>uCode</Radio.Button>
            <Radio.Button value='b'>uDesign</Radio.Button>
            <Radio.Button value='c'>uExplore</Radio.Button>
          </Radio.Group>
        </Demo.Block>
        <Demo.Block>
          哪一款产品最好看？
          <Radio.Group name='button' defaultValue='a'>
            <Radio.Button value='a'>uCode</Radio.Button>
            <Radio.Button value='b'>uDesign</Radio.Button>
            <Radio.Button value='c' disabled>
              uExplore
            </Radio.Button>
          </Radio.Group>
        </Demo.Block>
      </Demo.Page>
    </div>
  );
}

RadioPage.getLayout = getLayout;
