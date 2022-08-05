import React, { useRef, useState, ReactNode } from 'react';
import classNames from 'classnames';
import { StarFilled } from '@ubt/udesign-icons';
import Tooltip from '../tooltip';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { getOffsetLeft } from './utils';

const prefixCls = `${BASE_CLASS_PREFIX}-rate`;

export type RateProps = {
  count?: number; // star 总数。默认值：5
  allowHalf?: boolean; // 是否允许半选。默认值：false
  defaultValue?: number; // 默认值。默认值：-
  value?: number; // 当前数，受控值。默认值：-
  character?: ReactNode | ((index: number) => ReactNode); // 自定义字符。默认值：<StarFilled />
  tooltips?: string[]; // 自定义每项的提示信息。默认值：[]
  disabled?: boolean; // 只读，无法进行鼠标交互。默认值：false
  onChange?: (value: number) => void; // 选择时的回调。默认值：-
  onHoverChange?: (value: number) => void; // 选择时的回调。默认值：-
  activeColor?: string; // 高亮的颜色。默认值：-
} & NativeProps;

export const Rate = (props: RateProps) => {
  const { count = 5, character = <StarFilled />, style, onHoverChange, onChange, allowHalf, tooltips = [], disabled = false, defaultValue, value, activeColor } = props;
  const cls = classNames(prefixCls);
  const [hoverValue, SetHoverValue] = useState<number>(-1);
  const [cleanedValue, setCleanedValue] = useState<number>(defaultValue || value || -1);

  const refs: any = {};

  new Array(count).fill(1).forEach((item: number, index: number) => {
    refs[`ele${index}`] = useRef(null);
  });
  const getStarValue = (index: number, x: number) => {
    let value = index + 1;
    if (allowHalf) {
      const starEle = refs[`ele${index}`].current;
      const leftDis = getOffsetLeft(starEle);
      const width = starEle.clientWidth;
      if (x - leftDis < width / 2) {
        value -= 0.5;
      }
    }
    return value;
  };
  const onHover = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (disabled) return;
    const hoverValue = getStarValue(index, event.pageX);
    if (hoverValue !== cleanedValue) {
      SetHoverValue(hoverValue);
    }
    onHoverChange && onHoverChange(hoverValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (disabled) return;
    const cleanedValue = getStarValue(index, event.pageX);
    setCleanedValue(cleanedValue);
    onChange && onChange(cleanedValue);
  };

  const renderRate = (index: number) => {
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-half`]: index < cleanedValue || index < hoverValue,
      [`${prefixCls}-item-full`]: index < cleanedValue - 0.5 || index < hoverValue - 0.5,
    });
    const halfStyle =
      index < cleanedValue || index < hoverValue
        ? {
            color: activeColor,
          }
        : {};
    const fullStyle =
      index < cleanedValue - 0.5 || index < hoverValue - 0.5
        ? {
            color: activeColor,
          }
        : {};
    return (
      <div
        className={itemCls}
        onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
          onHover(event, index);
        }}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          handleClick(event, index);
        }}
        ref={refs[`ele${index}`]}
      >
        <div className={`${prefixCls}-item-first`} style={halfStyle}>
          {typeof character === 'function' ? character(index) : character}
        </div>
        <div className={`${prefixCls}-item-second`} style={fullStyle}>
          {typeof character === 'function' ? character(index) : character}
        </div>
      </div>
    );
  };

  return (
    <div
      className={cls}
      style={style}
      onMouseLeave={(event: React.MouseEvent<HTMLDivElement>) => {
        SetHoverValue(-1);
      }}
    >
      <div className={`${prefixCls}-wrapper`}>
        {new Array(count).fill(1).map((item: number, index: number) =>
          tooltips && tooltips.length > 0 ? (
            <React.Fragment key={index}>
              <Tooltip content={tooltips[index]}>{renderRate(index)}</Tooltip>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{renderRate(index)}</React.Fragment>
          ),
        )}
      </div>
    </div>
  );
};
Rate.displayName = 'Rate';
