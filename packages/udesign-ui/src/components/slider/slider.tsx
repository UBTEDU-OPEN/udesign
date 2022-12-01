import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { floor, round } from 'lodash';
import { NativeProps, usePropsValue } from '../../utils';

const prefixCls = `ud-slider`;

export type SliderProps = {
  defaultValue?: number; // 设置初始取值。
  value?: number; // 设置当前取值。
  max?: number; // 最大值。默认值：100
  min?: number; // 最小值。默认值：0
  size?: 'small' | 'middle'; // 设置大小。默认值：middle
  onChange?: (value: number) => void; // 当 Slider 的值发生改变时，会触发 onChange 事件。
  onAfterChange?: (value: number) => void; // 与 onmouseup 触发时机一致。n
} & NativeProps;

export const Slider = (props: SliderProps) => {
  const { defaultValue, max = 255, min = 0, size = 'middle', onAfterChange, style } = props;
  const handleRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const distance = useRef({
    x: 0,
    width: 0,
    ratio: 0,
  });
  let oldValue: number;

  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: defaultValue || min,
    onChange: props.onChange,
  });

  useEffect(() => {
    if (!sliderRef.current || !handleRef.current) return;
    const { x, width, height } = sliderRef.current.getBoundingClientRect();
    distance.current.ratio = width / (max - min);
    distance.current.x = x;
    distance.current.width = width;
    handleRef.current.style.top = `${-(handleRef.current.getBoundingClientRect().height - height) / 2}px`;
  }, []);

  const railHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const value = changeHandle(e.pageX, e.type);
    onAfterChange?.(value);
  };

  const renderRail = () => {
    const cls = classNames(`${prefixCls}-rail`);
    return <div className={cls} ref={railRef} onClick={railHandle}></div>;
  };

  const renderTrack = () => {
    const cls = classNames(`${prefixCls}-track`);
    return <div className={cls} style={{ width: `${((value - min) * 100) / (max - min)}%` }} onClick={railHandle}></div>;
  };

  const updateValue = (val: number) => {
    if (val !== oldValue) {
      setValue(val);
      oldValue = val;
    }
  };

  const changeHandle: (x: number, type: string) => number = (x: number, type: string) => {
    if (floor(distance.current.x) > x) {
      updateValue(min);
      return min;
    }

    if (x > floor(distance.current.width + distance.current.x)) {
      updateValue(max);
      return max;
    }

    const nextValue = getValue((x - distance.current.x) / distance.current.width, min, max);

    if (type === 'click') {
      updateValue(round(nextValue));
      return round(nextValue);
    }

    updateValue(round(nextValue));
    return round(nextValue);
  };

  const getValue = (ratio: number, min: number, max: number) => {
    return min + (max - min) * ratio;
  };

  const renderHandle = () => {
    const changeHandle: (x: number, type: string) => number = (x: number, type: string) => {
      if (floor(distance.current.x) > x) {
        updateValue(min);
        return min;
      }

      if (x > floor(distance.current.width + distance.current.x)) {
        updateValue(max);
        return max;
      }

      const nextValue = getValue((x - distance.current.x) / distance.current.width, min, max);

      if (type === 'click') {
        updateValue(round(nextValue));
        return round(nextValue);
      }

      updateValue(round(nextValue));
      return round(nextValue);
    };

    const onMouseDown = () => {
      if (props.value) return;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      changeHandle(e.pageX, e.type);
    };

    const onMouseUp = (e: MouseEvent) => {
      onAfterChange?.(changeHandle(e.pageX, e.type));
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onTouchStart = () => {
      if (props.value) return;
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (props.value) return;

      changeHandle(e.changedTouches[0].pageX, e.type);
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (props.value) return;
      onAfterChange?.(changeHandle(e.changedTouches[0].pageX, e.type));
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    const cls = classNames(`${prefixCls}-handle`);
    return <div className={cls} ref={handleRef} style={{ left: `${round(((value - min) * 100) / (max - min))}%` }} onMouseDown={onMouseDown} onTouchStart={onTouchStart}></div>;
  };

  const cls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
    },
    classNames,
  );

  return (
    <div className={cls} style={style} ref={sliderRef}>
      {renderRail()}
      {renderTrack()}
      {renderHandle()}
    </div>
  );
};
Slider.displayName = 'Slider';
