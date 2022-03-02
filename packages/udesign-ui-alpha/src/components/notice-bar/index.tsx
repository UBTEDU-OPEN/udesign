import React, { ReactNode, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined, RightOutlined, SoundOutlined } from '@ant-design/icons';
import { NativeProps } from '../../utils';
import { CommonType } from '../../constants';

type NoticeType = CommonType;

export const getNoticeTypeClass = (type: NoticeType) => {
  let cls;
  switch (type) {
    case 'default':
      cls = 'bg-gray-100 text-gray-500';
      break;

    case 'primary':
      cls = 'bg-blue-100 text-blue-500';
      break;

    case 'success':
      cls = 'bg-green-100 text-green-500';
      break;

    case 'danger':
      cls = 'bg-red-100 text-red-500';
      break;

    case 'warning':
    default:
      cls = 'bg-yellow-100 text-yellow-500';
      break;
  }
  return cls;
};

export type NoticeBarProps = {
  icon?: boolean; // 是否显示默认左侧图标
  left?: ReactNode; // 左侧内容
  right?: ReactNode; // 右侧内容

  delay?: number; // 开始滚动的延迟，单位 ms
  speed?: number; // 滚动速度，单位 px/s

  type?: NoticeType; // 通知栏模式，可选值为 closeable link
  mode?: 'closeable' | 'link'; // 通知栏模式，可选值为 closeable link
  scrollable?: boolean; // 是否开启滚动播放
  wrapable?: boolean; // 是否开启文本换行，只在禁用滚动时生效

  onClick?: () => void; // 点击通知栏时触发
  onClose?: () => void; // 关闭通知栏时触发
} & NativeProps;

export const NoticeBar = ({ icon = false, left, right, delay = 1000, speed = 80, type = 'default', mode, scrollable, wrapable, onClick, onClose, className, children }: NoticeBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);

  // 首次
  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
    // 不需要滚动
    if (!scrollable) return;
    // if (container.offsetWidth >= text.offsetWidth) return;
    const timeout = window.setTimeout(() => {
      const text = textRef.current;
      // 开始滚动
      if (text) {
        text.style.transitionDuration = `${Math.round(text.offsetWidth / speed)}s`;
        text.style.transform = `translateX(-${text.offsetWidth}px)`;
      }
    }, delay);
    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;
    // 不需要滚动
    if (!scrollable) return;
    // if (container.offsetWidth >= text.offsetWidth) return;
    text.style.transform = `translateX(${container.offsetWidth}px)`;
    text.style.transitionDuration = `${Math.round((container.offsetWidth + text.offsetWidth) / speed)}s`;
    text.style.transform = `translateX(-${text.offsetWidth}px)`;
  }, [key]);

  const cls = classNames('px-4 py-2', getNoticeTypeClass(type), className);
  const contentCls = classNames('px-3', wrapable ? '' : 'whitespace-nowrap', scrollable ? 'w-max ease-linear' : 'overflow-hidden overflow-ellipsis');

  const getRightIcon = () => {
    if (mode === 'closeable') {
      return <CloseOutlined />;
    } else if (mode === 'link') {
      return <RightOutlined />;
    }
  };

  return (
    <>
      <div className={cls} onClick={onClick}>
        <div className='flex items-center'>
          <div className='flex-none'>
            <div className='flex items-center gap-2'>
              {icon ? <SoundOutlined /> : null}
              {left}
            </div>
          </div>
          <div className='flex-auto overflow-hidden' ref={containerRef}>
            <div className={contentCls} ref={textRef} onTransitionEnd={() => setKey((k) => k + 1)} key={key}>
              {children}
            </div>
          </div>
          <div className='flex-none' onClick={onClose}>
            <div className='flex items-center gap-2'>
              {right}
              {getRightIcon()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NoticeBar.displayName = 'NoticeBar';
