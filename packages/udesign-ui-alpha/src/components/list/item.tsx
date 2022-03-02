import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { RightOutlined } from '@ant-design/icons';
import { NativeProps } from '../../utils';
import { CommonSize } from '../../constants';
// import { ArrowRightIcon } from '../icon';
// import { Space } from '../space';

// export type ListSize = CommonSize;

// export const getListSizeClass = (size: ListSize) => {
//   let cls;
//   switch (size) {
//     case 'large':
//       cls = 'px-6 py-3';
//       break;

//     case 'middle':
//       cls = 'px-4 py-2';
//       break;

//     case 'small':
//       cls = 'px-2 py-1';
//       break;

//     default:
//       cls = 'px-4 py-2';
//       break;
//   }
//   return cls;
// };

export type ListItemProps = {
  title?: ReactNode;
  description?: ReactNode;
  prefix?: ReactNode; // 列表项左侧区域
  extra?: ReactNode; // 列表项右侧区域
  // actions?: Array<React.ReactNode>;
  arrow?: boolean; // 右侧是否显示箭头图标
  // size?: ListSize;
  onClick?: () => void; // 列表项的点击事件，当设置了 onClick 属性时，列表项会有点击效果
} & NativeProps;

export const Item = ({
  title,
  description,
  prefix,
  extra,
  // actions,
  arrow,
  // size = 'middle',
  onClick,
  children,
}: ListItemProps) => {
  const wrapperCls = classNames(
    'p-3 w-full flex items-center border-b last:border-0',
    onClick ? 'cursor-pointer' : '',
    // getListSizeClass(size)
  );
  return (
    <>
      <div className={wrapperCls} onClick={onClick}>
        {prefix ? <div className='flex mr-2'>{prefix}</div> : null}
        <div className='flex-1'>
          {children ? (
            children
          ) : (
            <>
              <div className='text-gray-800'>{title}</div>
              {description ? <div className='text-sm text-gray-500'>{description}</div> : null}
            </>
          )}
        </div>
        {/* <Meta avatar={avatar} title={title} description={description} /> */}
        {extra ? <div className='text-gray-500 ml-5'>{extra}</div> : null}
        {/* {actions ? (
          <div className="text-gray-500 ml-5">
            <Space>{actions.map((action) => action)}</Space>
          </div>
        ) : null} */}
        {arrow ? (
          // <ArrowRightIcon className="pl-3 text-gray-300 text-3xl" />
          <RightOutlined className='pl-3 text-gray-400' />
        ) : null}
      </div>
    </>
  );
};

Item.displayName = 'List.Item';