import React, { useState } from 'react';
import { Toast, Space, Button, Copy } from '@ubt/udesign-ui';
import {
  PlusOutlined,
  FolderOutlined,
  MenuOutlined,
  DataFilled,
  DateOutline,
  PictureFilled,
  EyeInvisibleOutlined,
  EyeOutlined,
  LockOutlined,
  DownOutlined,
  UpOutlined,
  SettingFilled,
  UserOutlined,
  VoiceFilled,
  CaretDownOutlined,
  CaretUpOutlined,
  IdcardOutlined,
  FileOutlined,
  DeleteFilled,
  CopyOutlined,
  CheckOutlined,
  EditFilled,
  CloseCircleFilled,
  MoreOutlined,
  RightOutlined,
  LeftOutlined,
  CheckCircleFilled,
  InfoCircleFilled,
  ScreenFilled,
  SearchOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
  SyncOutlined,
  MinusCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  InfoCircleOutlined,
  UserCompileOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  HintFilled,
  UploadFilled,
  SmileOutlined,
  LinkOutlined,
  StarFilled,
  HeartFilled,
  ExclamationCircleFilled,
  RefreshOutlined,
  FirstRightOutlined,
  RadioFilled,
  RadioOutlined,
} from '@ubt/udesign-icons';
import { Demo } from '../../demo';
import { menus } from '../../constants/menus';

export default function IconPage() {
  const [type, setType] = useState('outlined');
  const directionIconsOutlined = [
    { key: 'UpOutlined', node: <UpOutlined /> },
    { key: 'DownOutlined', node: <DownOutlined /> },
    { key: 'LeftOutlined', node: <LeftOutlined /> },
    { key: 'RightOutlined', node: <RightOutlined /> },
    { key: 'FirstRightOutlined', node: <FirstRightOutlined /> },
    { key: 'CaretUpOutlined', node: <CaretUpOutlined /> },
    { key: 'CaretDownOutlined', node: <CaretDownOutlined /> },
  ];
  const tipsIconsOutlined = [
    { key: 'CheckCircleOutlined', node: <CheckCircleOutlined /> },
    { key: 'CloseCircleOutlined', node: <CloseCircleOutlined /> },
    { key: 'InfoCircleOutlined', node: <InfoCircleOutlined /> },
    { key: 'ClockCircleOutlined', node: <ClockCircleOutlined /> },
    { key: 'MinusCircleOutlined', node: <MinusCircleOutlined /> },
    { key: 'ExclamationCircleOutlined', node: <ExclamationCircleOutlined /> },
    { key: 'CloseOutlined', node: <CloseOutlined /> },
    { key: 'PlusOutlined', node: <PlusOutlined /> },
    { key: 'CheckOutlined', node: <CheckOutlined /> },
    { key: 'RadioFilled', node: <RadioFilled /> },
    { key: 'RadioOutlined', node: <RadioOutlined /> },
  ];
  const tipsIconsFilled = [
    { key: 'CheckCircleFilled', node: <CheckCircleFilled /> },
    { key: 'CloseCircleFilled', node: <CloseCircleFilled /> },
    { key: 'InfoCircleFilled', node: <InfoCircleFilled /> },
    { key: 'ExclamationCircleFilled', node: <ExclamationCircleFilled /> },
    { key: 'HintFilled', node: <HintFilled /> },
  ];
  const editIconsOutlined = [{ key: 'CopyOutlined', node: <CopyOutlined /> }];
  const editIconsFilled = [
    { key: 'EditFilled', node: <EditFilled /> },
    { key: 'DeleteFilled', node: <DeleteFilled /> },
    { key: 'UploadFilled', node: <UploadFilled /> },
  ];
  const otherIconsOutlined = [
    { key: 'EyeInvisibleOutlined', node: <EyeInvisibleOutlined /> },
    { key: 'EyeOutlined', node: <EyeOutlined /> },
    { key: 'MenuOutlined', node: <MenuOutlined /> },
    { key: 'SearchOutlined', node: <SearchOutlined /> },
    { key: 'UserOutlined', node: <UserOutlined /> },
    { key: 'UserCompileOutlined', node: <UserCompileOutlined /> },
    { key: 'IdcardOutlined', node: <IdcardOutlined /> },
    { key: 'FileOutlined', node: <FileOutlined /> },
    { key: 'LockOutlined', node: <LockOutlined /> },
    { key: 'FolderOutlined', node: <FolderOutlined /> },
    { key: 'SyncOutlined', node: <SyncOutlined /> },
    { key: 'LoadingOutlined', node: <LoadingOutlined /> },
    { key: 'MoreOutlined', node: <MoreOutlined /> },
    { key: 'SmileOutlined', node: <SmileOutlined /> },
    { key: 'LinkOutlined', node: <LinkOutlined /> },
    { key: 'RefreshOutlined', node: <RefreshOutlined /> },
    { key: 'DateOutline', node: <DateOutline /> },
  ];
  const otherIconsFilled = [
    { key: 'DataFilled', node: <DataFilled /> },
    { key: 'SettingFilled', node: <SettingFilled /> },
    { key: 'ScreenFilled', node: <ScreenFilled /> },
    { key: 'PictureFilled', node: <PictureFilled /> },
    { key: 'VoiceFilled', node: <VoiceFilled /> },
    { key: 'StarFilled', node: <StarFilled /> },
    { key: 'HeartFilled', node: <HeartFilled /> },
  ];

  const renderIcons = (
    data:
      | {
          key: string;
          node: JSX.Element;
        }[]
      | null,
  ) =>
    data ? (
      <div className=' p-5 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5 text-gray-500' style={{ background: 'rgba(242,244,250,0.45)' }}>
        {data.map((icon, index) => (
          <Copy className='p-3 text-4xl rounded-lg text-center hover:bg-white hover:text-blue-600' key={index} text={`<${icon.key} />`} onSuccess={() => Toast('????????????')} onError={() => Toast('????????????')}>
            {icon.node}
            <div className='text-xs'>{icon.key}</div>
          </Copy>
        ))}
      </div>
    ) : null;

  return (
    <>
      <Demo.Doc base='components' menus={menus}>
        <Demo.Page title='Icon ??????' description='???????????????????????????'>
          <div className='py-4'>
            <div className='text-2xl'>????????????</div>
            <div className='text-gray-500 my-2'>??????????????????????????????????????????????????????????????? @ubt/udesign-icons ??????????????????</div>
            <code>$ yarn add @ubt/udesign-icons@latest</code>
          </div>
          <div className='py-4'>
            <div className='text-2xl'>????????????</div>
            <div className='text-gray-500 my-2'>??????2????????????????????????</div>
            <Space>
              <Button type={type === 'outlined' ? 'primary' : 'default'} onClick={() => setType('outlined')}>
                ??????
              </Button>
              <Button type={type === 'filled' ? 'primary' : 'default'} onClick={() => setType('filled')}>
                ??????
              </Button>
            </Space>
            <div className='text-xl my-6'>???????????????</div>
            {renderIcons(type === 'outlined' ? directionIconsOutlined : null)}
            <div className='text-xl my-6'>????????????????????????</div>
            {renderIcons(type === 'outlined' ? tipsIconsOutlined : tipsIconsFilled)}
            <div className='text-xl my-6'>???????????????</div>
            {renderIcons(type === 'outlined' ? editIconsOutlined : editIconsFilled)}
            <div className='text-xl my-6'>???????????????</div>
            {renderIcons(type === 'outlined' ? otherIconsOutlined : otherIconsFilled)}
          </div>
          <Demo.Block title='??????' description='Icon ??????????????? size ?????????????????????????????????????????????????????? small??? middle??? large?????? size ????????? inherit ???????????????????????????????????????????????????'>
            <SettingFilled size='inherit' />
            <SettingFilled size='small' />
            <SettingFilled size='middle' />
            <SettingFilled size='large' />
          </Demo.Block>
          <Demo.Block title='??????' description='???????????? spin ??????????????????????????????????????????'>
            <SyncOutlined spin size='large' />
            <LoadingOutlined spin size='large' />
          </Demo.Block>
        </Demo.Page>
      </Demo.Doc>
    </>
  );
}
