import React, { useState, useEffect, ReactNode } from 'react';
import { RightOutlined, LeftOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { BASE_CLASS_PREFIX } from '../../constants';
import { NativeProps, toArray } from '../../utils';

const prefixCls = `${BASE_CLASS_PREFIX}-carousel`;

export type CarouselProps = {
  // autoplay?: boolean; // 是否自动切换。默认值：false
  speed?: number; // 切换时间（单位ms）。默认值：1000
  iconLeft?: ReactNode; // 左侧图标。默认值：<LeftOutlined />
  iconRight?: ReactNode; // 右侧图标。默认值：<RightOutlined />
  loop?: boolean; // 是否循环轮播。默认值：false
} & NativeProps;

export const Carousel = (props: CarouselProps) => {
  const { speed = 1000, loop = true, children, iconLeft = <LeftOutlined />, iconRight = <RightOutlined />, style, className } = props;

  const [count, setCount] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('left');
  const [animation, setAnimation] = useState({
    animationDuration: `${speed}ms`,
    transitionDuration: `${speed}ms`,
    transitionTimingFunction: 'ease',
    animationTimingFunction: 'ease',
  });
  let timer: NodeJS.Timeout;

  useEffect(() => {
    setAnimation({
      animationDuration: `${speed}ms`,
      transitionDuration: `${speed}ms`,
      transitionTimingFunction: 'ease',
      animationTimingFunction: 'ease',
    });
  }, []);

  // useEffect(() => {
  //   if (autoplay) {
  //     setAnimationDirection('left');
  //     timer = setTimeout(() => {
  //       preMove();
  //     }, speed);
  //   }
  //   return () => clearTimeout(timer);
  // });

  const nextMove = () => {
    setAnimationDirection('right');
    if (count === 0) {
      setCount(toArray(children).length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const preMove = () => {
    setAnimationDirection('left');
    if (count === toArray(children).length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const renderItems = () => {
    const item = (
      <div className={`${prefixCls}`}>
        {toArray(children).map((item, index) => {
          const cls = classNames(`${prefixCls}-item`, {
            [`${prefixCls}-item-active`]: count === index,
            [`${prefixCls}-item-${animationDirection}-enter-animation`]: count === index,
            [`${prefixCls}-item-${animationDirection}-leave-animation`]: count !== index,
          });
          return (
            <div className={`${cls}`} key={index} style={{ ...animation }}>
              {item}
            </div>
          );
        })}
      </div>
    );

    return item;
  };

  const renderLeftIcon = () => {
    const cls = classNames({
      [`${prefixCls}-icon`]: true,
      [`${prefixCls}-icon-left`]: true,
      [`${prefixCls}-icon-left-disabled`]: !loop && count === 0,
    });

    const handleClick = () => {
      if (!loop) {
        if (count !== 0) {
          setAnimationDirection('right');
          setCount(count - 1);
        } else return;
      }
      setAnimationDirection('right');
      if (loop) {
        nextMove();
      }
    };

    return (
      <span className={cls} onClick={handleClick}>
        {iconLeft}
      </span>
    );
  };

  const renderRightIcon = () => {
    const cls = classNames({
      [`${prefixCls}-icon`]: true,
      [`${prefixCls}-icon-right`]: true,
      [`${prefixCls}-icon-right-disabled`]: !loop && count === toArray(children).length - 1,
    });
    const handleClick = () => {
      if (!loop) {
        if (count !== toArray(children).length - 1) {
          setAnimationDirection('left');
          setCount(count + 1);
        } else return;
      }

      if (loop) {
        setAnimationDirection('left');
        preMove();
      }
    };
    return (
      <span className={cls} onClick={handleClick}>
        {iconRight}
      </span>
    );
  };
  // const mouseEnter = () => {
  //   clearInterval(timer);
  // };
  // const mouseLeave = () => {
  //   if (autoplay) {
  //     setAnimationDirection('left');
  //     timer = setTimeout(() => {
  //       preMove();
  //     }, speed);
  //   }
  // };
  const cls = classNames(`${prefixCls}-wrapper`, className);
  return (
    <>
      <div className={cls} style={style}>
        {renderItems()}
        {renderLeftIcon()}
        {renderRightIcon()}
      </div>
    </>
  );
};

Carousel.displayName = 'Carousel';
