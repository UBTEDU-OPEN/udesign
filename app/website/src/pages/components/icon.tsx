import React, { useState } from 'react';
import { Toast, Space, Button } from '@ubt/udesign-ui';
import {
  PlusOutlined,
  FolderOutlined,
  MenuOutlined,
  DataFilled,
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
  Loading2Outlined,
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
} from '@ubt/udesign-icons';
import { Copy } from '@ubt/udesign-ui-alpha';
import { Demo } from '../../demo';

export default function IconPage() {
  const [type, setType] = useState('outlined');
  const directionIconsOutlined = [
    { key: 'DownOutlined', node: <DownOutlined /> },
    { key: 'UpOutlined', node: <UpOutlined /> },
    { key: 'RightOutlined', node: <RightOutlined /> },
    { key: 'LeftOutlined', node: <LeftOutlined /> },
    { key: 'CaretUpOutlined', node: <CaretUpOutlined /> },
    { key: 'CaretDownOutlined', node: <CaretDownOutlined /> },
  ];
  const tipsIconsOutlined = [
    { key: 'CheckCircleOutlined', node: <CheckCircleOutlined /> },
    { key: 'CloseCircleOutlined', node: <CloseCircleOutlined /> },
    { key: 'InfoCircleOutlined', node: <InfoCircleOutlined /> },
    { key: 'ClockCircleOutlined', node: <ClockCircleOutlined /> },
    { key: 'MinusCircleOutlined', node: <MinusCircleOutlined /> },
    { key: 'CheckOutlined', node: <CheckOutlined /> },
    { key: 'PlusOutlined', node: <PlusOutlined /> },
    { key: 'CloseOutlined', node: <CloseOutlined /> },
  ];
  const tipsIconsFilled = [
    { key: 'CheckCircleFilled', node: <CheckCircleFilled /> },
    { key: 'CloseCircleFilled', node: <CloseCircleFilled /> },
    { key: 'InfoCircleFilled', node: <InfoCircleFilled /> },
  ];
  const editIconsOutlined = [{ key: 'CopyOutlined', node: <CopyOutlined /> }];
  const editIconsFilled = [
    { key: 'EditFilled', node: <EditFilled /> },
    { key: 'DeleteFilled', node: <DeleteFilled /> },
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
  ];
  const otherIconsFilled = [
    { key: 'DataFilled', node: <DataFilled /> },
    { key: 'PictureFilled', node: <PictureFilled /> },
    { key: 'SettingFilled', node: <SettingFilled /> },
    { key: 'VoiceFilled', node: <VoiceFilled /> },
    { key: 'Loading2Outlined', node: <Loading2Outlined /> },
    { key: 'ScreenFilled', node: <ScreenFilled /> },
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
      <div className='bg-gray-50 p-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {data.map((icon, index) => (
          <Copy className='p-3 text-4xl rounded-lg text-center hover:bg-white hover:text-blue-600' key={index} text={`<${icon.key} />`} onSuccess={() => Toast('复制成功')} onError={() => Toast('复制失败')}>
            {icon.node}
            <div className='text-base'>{icon.key}</div>
          </Copy>
        ))}
      </div>
    ) : null;

  return (
    <Demo.Page title='Icon 图标' description='语义化的矢量图形。'>
      <div className='py-4'>
        <div className='text-2xl'>图标列表</div>
        <div className='text-gray-500 my-2'>提供2种风格常用图标。</div>
        <Space>
          <Button type={type === 'outlined' ? 'primary' : 'default'} onClick={() => setType('outlined')}>
            线性
          </Button>
          <Button type={type === 'filled' ? 'primary' : 'default'} onClick={() => setType('filled')}>
            面性
          </Button>
        </Space>
        <div className='text-xl my-6'>方向性图标</div>
        {renderIcons(type === 'outlined' ? directionIconsOutlined : null)}
        <div className='text-xl my-6'>提示及建议性图标</div>
        {renderIcons(type === 'outlined' ? tipsIconsOutlined : tipsIconsFilled)}
        <div className='text-xl my-6'>编辑类图标</div>
        {renderIcons(type === 'outlined' ? editIconsOutlined : editIconsFilled)}
        <div className='text-xl my-6'>其他类图标</div>
        {renderIcons(type === 'outlined' ? otherIconsOutlined : otherIconsFilled)}
      </div>
      <Demo.Block title='尺寸' description='Icon组件封装了size属性，可以更方便地定义图标尺寸，支持 small， middle， large，当size指定为inherit时，图标大小继承当前上下文字体大小'>
        <SettingFilled size='small' />
        <SettingFilled size='middle' />
        <SettingFilled size='large' />
      </Demo.Block>
      <Demo.Block title='旋转'>
        <SyncOutlined spin size='large' />
        <LoadingOutlined spin size='large' />
        <Loading2Outlined spin size='large' />
      </Demo.Block>
    </Demo.Page>
  );
}
