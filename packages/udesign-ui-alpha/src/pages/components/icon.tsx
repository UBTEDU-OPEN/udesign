import React from 'react';
import { Demo } from 'demo';
import { ArrowRightIcon, LoadingIcon, SelectIcon, CloseIcon, HeartIcon, HeartFilledIcon, PageIcon, PaymentIcon, PictureFilledIcon, UserIcon, MarketingIcon, SettingIcon, MoreIcon, InfoIcon, WarningIcon, CheckIcon, Space } from '@ubt/udesign-ui-alpha';

export default function IconPage() {
  return (
    <>
      <Demo.Page title='Icon 图标' description='基于 svg 的图标集，目前图标来源以 @ant-design/icons 为主。' todo='需要重新整理，内置基础、线框、实底三类常用图标。'>
        <Demo.Block title='基础'>
          <Space wrap>
            <ArrowRightIcon className='text-3xl' />
            <div>ArrowRightIcon</div>
            <CheckIcon className='text-3xl' />
            <div>CheckIcon</div>
            <LoadingIcon className='text-3xl' />
            <div>LoadingIcon</div>
            <SelectIcon className='text-3xl' />
            <div>SelectIcon</div>
            <CloseIcon className='text-3xl' />
            <div>CloseIcon</div>
            <HeartIcon className='text-3xl' />
            <div>HeartIcon</div>
            <HeartFilledIcon className='text-3xl' />
            <div>HeartFilledIcon</div>
            <PictureFilledIcon className='text-3xl' />
            <div>PictureFilledIcon</div>
          </Space>
        </Demo.Block>
        <Demo.Block title='后台'>
          <Space wrap>
            <PageIcon className='text-3xl' />
            <div>PageIcon</div>
            <PaymentIcon className='text-3xl' />
            <div>PaymentIcon</div>
            <UserIcon className='text-3xl' />
            <div>UserIcon</div>
            <MarketingIcon className='text-3xl' />
            <div>MarketingIcon</div>
            <SettingIcon className='text-3xl' />
            <div>SettingIcon</div>
            <MoreIcon className='text-3xl' />
            <div>MoreIcon</div>
          </Space>
        </Demo.Block>
        <Demo.Block title='状态'>
          <Space wrap>
            <InfoIcon className='text-3xl' />
            <div>InfoIcon</div>
            <WarningIcon className='text-3xl' />
            <div>WarningIcon</div>
          </Space>
        </Demo.Block>
      </Demo.Page>
    </>
  );
}
