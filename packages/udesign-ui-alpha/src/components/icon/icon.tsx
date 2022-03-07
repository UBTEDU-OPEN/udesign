// TODO: 使用脚本生成icon代码
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { ArrowRightSvg, CheckSvg, CloseSvg, HeartFilledSvg, HeartSvg, InfoSvg, LoadingSvg, MarketingSvg, MoreSvg, PageSvg, PaymentSvg, PictureFilledSvg, SelectSvg, SettingSvg, UserSvg, WarningSvg } from './icons-svg';

export interface BaseIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  spin?: boolean; // 是否有旋转动画
}

export interface IconProps extends BaseIconProps {
  icon: ReactNode;
}

export const Icon = ({ icon, spin, className, ...restProps }: IconProps) => {
  return (
    <>
      <span className={classNames('inline-block align-middle', spin ? 'animate-spin' : '', className)} {...restProps}>
        {icon}
      </span>
    </>
  );
};

export const ArrowRightIcon = (props: BaseIconProps) => <Icon icon={<ArrowRightSvg />} {...props} />;

export const CheckIcon = (props: BaseIconProps) => <Icon icon={<CheckSvg />} {...props} />;
export const LoadingIcon = (props: BaseIconProps) => <Icon icon={<LoadingSvg />} spin {...props} />;

export const SelectIcon = (props: BaseIconProps) => <Icon icon={<SelectSvg />} {...props} />;
export const CloseIcon = (props: BaseIconProps) => <Icon icon={<CloseSvg />} {...props} />;
export const HeartIcon = (props: BaseIconProps) => <Icon icon={<HeartSvg />} {...props} />;
export const HeartFilledIcon = (props: BaseIconProps) => <Icon icon={<HeartFilledSvg />} {...props} />;

export const PageIcon = (props: BaseIconProps) => <Icon icon={<PageSvg />} {...props} />;
export const PaymentIcon = (props: BaseIconProps) => <Icon icon={<PaymentSvg />} {...props} />;
export const PictureFilledIcon = (props: BaseIconProps) => <Icon icon={<PictureFilledSvg />} {...props} />;
export const UserIcon = (props: BaseIconProps) => <Icon icon={<UserSvg />} {...props} />;
export const MarketingIcon = (props: BaseIconProps) => <Icon icon={<MarketingSvg />} {...props} />;
export const SettingIcon = (props: BaseIconProps) => <Icon icon={<SettingSvg />} {...props} />;
export const MoreIcon = (props: BaseIconProps) => <Icon icon={<MoreSvg />} {...props} />;
export const InfoIcon = (props: BaseIconProps) => <Icon icon={<InfoSvg />} {...props} />;
export const WarningIcon = (props: BaseIconProps) => <Icon icon={<WarningSvg />} {...props} />;

// 二次组装的图标
export const SuccessIcon = (props: BaseIconProps) => <Icon icon={<CheckIcon className='block bg-green-500 text-white p-2 rounded-full' />} {...props} />;
export const ErrorIcon = (props: BaseIconProps) => <Icon icon={<CloseIcon className='block bg-red-500 text-white p-2 rounded-full' />} {...props} />;
