import React from 'react';
import DatePanel from './date-panel';
import DateTimePanel from './date-time-panel';
import { NativeProps } from '../../../utils';

export type PickerPanelBaseProps = {
  picker?: 'date'; // 设置选择器类型。默认值：date
} & Omit<NativeProps, 'children'>;

export type PickerPanelProps = PickerPanelBaseProps & {
  onChange?: (dateString: string) => void;
  defaultValue?: string;
  viewDate?: string;
  onViewDateChange?: (isYear: boolean, diff: number) => void;
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
  showTime?: boolean; // 是否显示时间。默认值：-
  showNow?: boolean;
};

const PickerPanel = (props: PickerPanelProps) => {
  let { picker = 'date', showTime, ...resetProps } = props;
  const renderPanel = () => {
    let node;
    switch (picker) {
      default:
        node = showTime ? <DateTimePanel {...resetProps}></DateTimePanel> : <DatePanel {...resetProps}></DatePanel>;
    }
    return node;
  };

  return <>{renderPanel()}</>;
};

export default PickerPanel;
