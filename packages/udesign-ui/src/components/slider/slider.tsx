import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { floor, round, ceil } from 'lodash';
import { NativeProps, usePropsValue } from '../../utils';

const prefixCls = `ud-slider`;

export type SliderProps = {
  defaultValue?: number; // 设置初始取值。
  value?: number; // 设置当前取值。
  max?: number; // 最大值。默认值：100
  min?: number; // 最小值。默认值：0
  step?: number; // 步长，取值必须大于 0。默认值: 1
  size?: 'small' | 'middle'; // 设置大小。默认值：middle
  disabled?: boolean; // 禁用状态。默认值: false
  onChange?: (value: number) => void; // 当 Slider 的值发生改变时，会触发 onChange 事件。
  onAfterChange?: (value: number) => void; // 与 onmouseup 触发时机一致。
} & NativeProps;

export const Slider = (props: SliderProps) => {
  const { defaultValue, max = 100, min = 0, size = 'middle', onAfterChange, style, disabled = false, step = 1, className } = props;
  const handleRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const distance = useRef({
    x: 0,
    width: 0,
    ratio: 0,
    lastStep: 0,
  });
  const stepDecimals = step.toString().split('.')[1]?.length || 0;
  let oldValue: number;

  const [value, setValue] = usePropsValue({
    value: props.value,
    defaultValue: defaultValue || min,
    onChange: props.onChange,
  });

  useEffect(() => {
    if (!sliderRef.current || !handleRef.current) return;
    const { height } = sliderRef.current.getBoundingClientRect();
    handleRef.current.style.top = `${-(handleRef.current.getBoundingClientRect().height - height) / 2}px`;
  }, []);

  const getDistance = () => {
    if (!sliderRef.current || !handleRef.current) return;
    const { x, width } = sliderRef.current.getBoundingClientRect();
    distance.current.ratio = width / (max - min);
    distance.current.x = x;
    distance.current.width = width;
  };

  const railHandle = (e: React.MouseEvent) => {
    if (disabled) return;
    getDistance();
    e.preventDefault();
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

    const nextValue = getValue((x - distance.current.x) / distance.current.width, min, max) / step;

    if (nextValue >= getValue(1, min, max) / step - 0.5) {
      updateValue(max);
      return max;
    }

    if (type === 'click') {
      updateValue(round(round(nextValue) * step, stepDecimals));
      return round(round(nextValue) * step, stepDecimals);
    }

    if ((nextValue >= floor(nextValue) + 0.5 && nextValue < ceil(nextValue)) || (nextValue < floor(nextValue) + 0.5 && nextValue >= floor(nextValue) - 0.5)) {
      updateValue(round(round(nextValue) * step, stepDecimals));
    }

    return round(round(nextValue) * step, stepDecimals);
  };

  const getValue = (ratio: number, min: number, max: number) => {
    return min + (max - min) * ratio;
  };

  const renderHandle = () => {
    const onMouseDown = () => {
      if (disabled) return;
      getDistance();
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
      if (disabled) return;
      getDistance();
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (disabled) return;

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
      [`${prefixCls}-disabled`]: disabled,
    },
    className,
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
