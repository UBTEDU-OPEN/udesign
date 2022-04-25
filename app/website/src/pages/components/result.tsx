import React from 'react';
import { Demo } from 'demo';
import { Button, Result, SuccessIcon, ErrorIcon } from '@ubt/udesign-ui-alpha';
import { Space} from "@ubt/udesign-ui";
export default function ResultPage() {
  return (
    <>
      <Demo.Page title='Result 结果' description='用于反馈一系列操作任务的处理结果。'>
        <Demo.Block title='基本用法' description='通过 image 设置占位图片，也可以传入自定义的插画。'>
          <Result image={<SuccessIcon className='text-5xl' />} title='功能建设中' description='当前功能暂未开放，敬请期待。' />
        </Demo.Block>
        <Demo.Block title='自定义' description='通过 children 可以实现自定义的描述内容。'>
          <Result image={<SuccessIcon className='text-5xl' />} title='空状态标题' description='开始创建你的第一个仪表盘吧！'>
            <div>
              <Button type='primary'>一级按钮</Button>
              &nbsp;
              <Button type='default'>二级按钮</Button>
            </div>
          </Result>
        </Demo.Block>
        <Demo.Block title='不同布局' description='支持 2 种类型的模式：vertical、horizontal。默认为 vertical。'>
          <Result mode='horizontal' image={<SuccessIcon className='text-5xl' />} title='空状态标题' description='开始创建你的第一个仪表盘吧！'>
            <div>
              <Button type='primary'>一级按钮</Button>
              &nbsp;
              <Button type='default'>二级按钮</Button>
            </div>
          </Result>
        </Demo.Block>
        <Demo.Block title='占位图' todo='提供常用场景的配图：404、无结果、没有权限、加载失败、创建成功等'>
          <Space>
            <ErrorIcon className='text-5xl' />
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
