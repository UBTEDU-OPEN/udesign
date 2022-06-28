import React, { useRef, useState, ReactNode } from 'react';
import classNames from 'classnames';
import Tooltip from '../tooltip';
import { NativeProps } from '../../utils';
import { BASE_CLASS_PREFIX } from '../../constants';
import { getOffsetLeft } from './utils';

const prefixCls = `${BASE_CLASS_PREFIX}-rate`;

export type RateProps = {
  count?: number; // star 总数
  allowHalf?: boolean; // 是否允许半选
  defaultValue?: number; // 默认值
  value?: number; // 当前数，受控值
  character?: string | ((index: number) => ReactNode); // 自定义字符
  tooltips?: string[]; // 自定义每项的提示信息
  disabled?: boolean; // 只读，无法进行鼠标交互
  onChange?: (value: number) => void; // 选择时的回调
  onHoverChange?: (value: number) => void; // 选择时的回调
} & NativeProps;

export const Rate = (props: RateProps) => {
  const { count = 5, character = '★', style, onHoverChange, onChange, allowHalf, tooltips = [], disabled = false, defaultValue, value } = props;
  const cls = classNames(prefixCls);
  const [hoverValue, SetHoverValue] = useState<number>(-1);
  const [cleanedValue, setCleanedValue] = useState<number>(defaultValue || value || -1);

  const refs: any = {};

  [...new Array(count).keys()].forEach((item: number) => {
    refs[`ele${item}`] = useRef(null);
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
        <div className={`${prefixCls}-item-first`}>{typeof character === 'function' ? character(index) : character}</div>
        <div className={`${prefixCls}-item-second`}>{typeof character === 'function' ? character(index) : character}</div>
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
        {[...new Array(count).keys()].map((item: number, index: number) =>
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
