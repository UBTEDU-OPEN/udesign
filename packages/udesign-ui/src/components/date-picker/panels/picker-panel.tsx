import React from 'react';
import DatePanel from './date-panel';
import { NativeProps } from '../../../utils';

export type PickerPanelBaseProps = {
  picker?: 'date'; // 设置选择器类型。默认值：date
} & Omit<NativeProps, 'children'>;

export type PickerPanelProps = PickerPanelBaseProps & {
  onSelect?: (dateString: string) => void;
  defaultValue?: string;
  viewDate?: string;
  onViewDateChange?: (isYear: boolean, diff: number) => void;
  beginValue?: string; // 最早日期
  endValue?: string; // 最晚日期
};

const PickerPanel = (props: PickerPanelProps) => {
  let { picker = 'date', ...resetProps } = props;
  const renderPanel = () => {
    let node;
    switch (picker) {
      default:
        node = <DatePanel {...resetProps}></DatePanel>;
    }
    return node;
  };

  return <>{renderPanel()}</>;
};

export default PickerPanel;
