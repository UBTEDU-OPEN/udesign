import React, { useState, useEffect, ReactNode } from 'react';
import { RightOutlined, LeftOutlined } from '@ubt/udesign-icons';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { BASE_CLASS_PREFIX } from '../../constants';
import { NativeProps, toArray } from '../../utils';

const prefixCls = `${BASE_CLASS_PREFIX}-carousel`;

export type CarouselProps = {
  autoplay?: boolean; // 是否自动切换。默认值：false
  speed?: number; // 切换时间（单位ms）。默认值：1500
  iconLeft?: ReactNode; // 左侧图标。默认值：<LeftOutlined />
  iconRight?: ReactNode; // 右侧图标。默认值：<RightOutlined />
  loop?: boolean; // 是否循环轮播。默认值：false
} & NativeProps;
let timer: NodeJS.Timeout;

export const Carousel = (props: CarouselProps) => {
  const { autoplay = false, speed = 1500, loop = true, children, iconLeft = <LeftOutlined />, iconRight = <RightOutlined />, style, className } = props;

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
    setAnimation({
      animationDuration: `${speed}ms`,
      transitionDuration: `${speed}ms`,
      transitionTimingFunction: 'ease',
      animationTimingFunction: 'ease',
    });
  }, []);

  const loopMove = () => {
    if (autoplay && !isFlag) {
      timer = setInterval(() => {
        preMove();
        // setInit('NaN');
      }, speed);
    }
  };

  useEffect(() => {
    loopMove();
    return () => clearInterval(timer);
  });

  const nextMove = () => {
    // setInit('NaN');
    if (animationDirection !== 'right') setAnimationDirection('right');
    if (count === 0) {
      setCount(toArray(children).length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const preMove = () => {
    if (animationDirection !== 'left') setAnimationDirection('left');
    if (count === toArray(children).length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  console.log(init);

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
        } else return;
      }

      if (loop) {
        nextMove();
      }
    };
    const click = debounce(handleClick, speed);

    return (
      <span className={cls} onClick={click}>
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
    const click = debounce(handleClick, speed);

    return (
      <span className={cls} onClick={click}>
        {iconRight}
      </span>
    );
  };
  const mouseEnter = () => {
    setIsFlag(true);
    clearInterval(timer);
  };
  const mouseLeave = () => {
    setIsFlag(false);
    loopMove();
  };
  const cls = classNames(`${prefixCls}-wrapper`, className);
  return (
    <>
      <div className={cls} style={style} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {renderItems()}
        {renderLeftIcon()}
        {renderRightIcon()}
      </div>
    </>
  );
};

Carousel.displayName = 'Carousel';
