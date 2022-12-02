import React from 'react';
import classNames from 'classnames';
import { FirstRightOutlined, RightOutlined, LeftOutlined } from '@ubt/udesign-icons';
import { BASE_CLASS_PREFIX } from '../../../constants';
import './index.scss';

export type HeaderProps = {
  prefixCls?: string;
  // Icons
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
  superPrevIcon?: React.ReactNode;
  superNextIcon?: React.ReactNode;
  /** Last one step */
  onPrev?: () => void;
  /** Next one step */
  onNext?: () => void;
  /** Last multiple steps */
  onSuperPrev?: () => void;
  /** Next multiple steps */
  onSuperNext?: () => void;
  children?: React.ReactNode;
  hidePrev?: boolean;
  hideNext?: boolean;
};

const PanelHeader = ({ prefixCls = `${BASE_CLASS_PREFIX}-date-picker-panel`, prevIcon, nextIcon, superPrevIcon, superNextIcon, onSuperPrev, onSuperNext, onPrev, onNext, children, hideNext, hidePrev }: HeaderProps) => (
  <div className={`${prefixCls}-header`}>
    <div className={`${prefixCls}-header-img-container`}>
      {onSuperPrev && (
        <div className={classNames(`${prefixCls}-headerImgBox`, hidePrev ? `${prefixCls}-hidden` : '')} onClick={onSuperPrev}>
          {superPrevIcon ?? <FirstRightOutlined className={classNames(`left-icon`, `${prefixCls}-header-left-icon`)} size='small' />}
        </div>
      )}
      {onPrev && (
        <div className={classNames(`${prefixCls}-headerImgBox`, `${prefixCls}-header-left-icon`, hidePrev ? `${prefixCls}-hidden` : '')} onClick={onPrev}>
          {prevIcon ?? <LeftOutlined size='small' />}
        </div>
      )}
    </div>
    {children}
    <div className={`${prefixCls}-header-img-container`}>
      {onNext && (
        <div className={classNames(`${prefixCls}-headerImgBox`, hideNext ? `${prefixCls}-hidden` : '')} onClick={onNext}>
          {nextIcon ?? <RightOutlined size='small' />}
        </div>
      )}
      {onSuperNext && (
        <div className={classNames(`${prefixCls}-headerImgBox`, hideNext ? `${prefixCls}-hidden` : '')} onClick={onSuperNext}>
          {superNextIcon ?? <FirstRightOutlined size='small' />}
        </div>
      )}
    </div>
  </div>
);

export default PanelHeader;
