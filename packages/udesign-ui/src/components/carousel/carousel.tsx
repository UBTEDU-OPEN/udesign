import React, { useState, useEffect, ReactNode, useCallback } from 'react';
import { RightOutlined, LeftOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { get, isObject } from 'lodash';
import { BASE_CLASS_PREFIX } from '../../constants';
import { NativeProps, toArray } from '../../utils';

const prefixCls = `${BASE_CLASS_PREFIX}-carousel`;

export interface CarouselRef {
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
}

export type CarouselProps = {
  autoPlay?: boolean | { interval?: number }; // 是否自动切换。默认值：false
  speed?: number; // 切换时间（单位ms）。默认值：1500
  iconLeft?: ReactNode; // 左侧图标。默认值：<LeftOutlined />
  iconRight?: ReactNode; // 右侧图标。默认值：<RightOutlined />
  loop?: boolean; // 是否循环轮播。默认值：false
} & NativeProps;
let _interval: NodeJS.Timeout;
const numbers = {
  DEFAULT_ACTIVE_INDEX: 0,
  DEFAULT_INTERVAL: 2000,
  DEFAULT_SPEED: 300,
};

export const Carousel = React.forwardRef<CarouselRef, CarouselProps>(({ autoPlay = false, speed = 600, loop = true, children, iconLeft = <LeftOutlined />, iconRight = <RightOutlined />, style, className }, ref) => {
  const slickRef = React.useRef<any>();
  const [count, setCount] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('left');
  const [isFlag, setIsFlag] = useState(false);
  const [animation, setAnimation] = useState({
    animationDuration: `${speed}ms`,
    transitionDuration: `${speed}ms`,
    transitionTimingFunction: 'ease',
    animationTimingFunction: 'ease',
  });

  const [init, setInit] = useState('NaN');

  useEffect(() => {
    setInit('0');
  }, []);

  const getSwitchingTime: () => number = () => {
    const autoPlayType = typeof autoPlay;
    if (autoPlayType === 'boolean' && autoPlay) {
      return numbers.DEFAULT_INTERVAL + speed;
    }
    if (isObject(autoPlay)) {
      return get(autoPlay, 'interval', numbers.DEFAULT_INTERVAL) + speed;
    }
    return speed;
  };

  const play = (interval: number) => {
    if (!isFlag && autoPlay) {
      if (_interval) {
        clearInterval(_interval);
      }
      _interval = setInterval(() => {
        preMove();
      }, interval);
    }
  };

  useEffect(() => {
    play(getSwitchingTime());
    return () => clearInterval(_interval);
  });

  const nextMove = () => {
    if (!loop && count === 0) return;
    animationDirection !== 'right' && setAnimationDirection('right');
    count === 0 ? setCount(toArray(children).length - 1) : setCount(count - 1);
    init !== 'NaN' && setInit('NaN');
  };

  const preMove = () => {
    if (!loop && count === toArray(children).length - 1) return;
    animationDirection !== 'left' && setAnimationDirection('left');
    count === toArray(children).length - 1 ? setCount(0) : setCount(count + 1);
    init !== 'NaN' && setInit('NaN');
  };

  const goTo = (index: number) => {
    setCount(index);
  };

  React.useImperativeHandle(ref, () => ({
    goTo,
    prev: nextMove,
    next: preMove,
  }));

  const renderItems = () => {
    const item = (
      <div className={`${prefixCls}`}>
        {toArray(children).map((item, index) => {
          const cls = classNames(`${prefixCls}-item`, {
            [`${prefixCls}-item-active`]: count === index,
            [`${prefixCls}-item-${animationDirection}-enter-animation`]: count === index && Number(init) !== index,
            [`${prefixCls}-item-${animationDirection}-leave-animation`]: count !== index,
          });
          return (
            <div className={`${cls}`} data-index={index} key={index} style={{ ...animation }}>
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
          setCount(count - 1);
          if (animationDirection !== 'right') setAnimationDirection('right');
        }
      }
      if (loop) nextMove();
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
      if (init !== 'NaN') setInit('NaN');
      if (!loop) {
        if (count !== toArray(children).length - 1) {
          setAnimationDirection('left');
          setCount(count + 1);
        } else return;
      }

      if (loop) {
        preMove();
      }
    };

    return (
      <span className={cls} onClick={handleClick}>
        {iconRight}
      </span>
    );
  };

  const mouseEnter = () => {
    setIsFlag(true);
    clearInterval(_interval);
  };

  const mouseLeave = () => {
    setIsFlag(false);
    play(getSwitchingTime());
  };

  const cls = classNames(`${prefixCls}-wrapper`, className);

  return (
    <>
      <div className={cls} style={style} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} ref={slickRef}>
        {renderItems()}
        {renderLeftIcon()}
        {renderRightIcon()}
      </div>
    </>
  );
});

Carousel.displayName = 'Carousel';
