/* eslint-disable camelcase */
import React from 'react';
import { Empty } from '@ubt/udesign-ui';
import { Demo } from '../../demo';
import icon_empty_1 from '../../../public/icon_empty_1.svg';
import icon_empty_2 from '../../../public/icon_empty_2.svg';
import icon_empty_3 from '../../../public/icon_empty_3.svg';
import icon_empty_4 from '../../../public/icon_empty_4.svg';

export default function EmptyPage() {
  return (
    <>
      <Demo.Page title='Empty 空状态' description='空状态时的展示占位图。'>
        <Demo.Block title='何时使用' description='*当目前没有数据时，用于显式的用户提示。初始化场景时的引导创建流程。' />
        <Demo.Block title='基础用法' description='默认的空状态'>
          <Empty />
        </Demo.Block>
        <Demo.Block title='无描述用法' description='仅展示空状态图片，不展示描述文案。'>
          <Empty description={null} />
        </Demo.Block>
        <Demo.Block title='自定义图片' description='可以通过 image 自定义图片。'>
          <Empty image={<img src={icon_empty_1} />} />
        </Demo.Block>
        <Demo.Block>
          <Empty image={<img src={icon_empty_2} />} />
        </Demo.Block>
        <Demo.Block>
          <Empty image={<img src={icon_empty_3} />} />
        </Demo.Block>
        <Demo.Block>
          <Empty image={<img src={icon_empty_4} />} />
        </Demo.Block>
        <Demo.Block title='自定义文案' description='自定义描述空状态的文案。 '>
          <Empty description='老师还没有为你安排学习计划～' />
        </Demo.Block>
        <Demo.Block>
          <Empty description='你的学习计划暂未安排' />
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
