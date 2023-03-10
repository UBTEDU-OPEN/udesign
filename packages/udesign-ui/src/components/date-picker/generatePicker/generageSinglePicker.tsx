import React, { forwardRef } from 'react';
import PickerPanel from './date-picker';
import type { DatePickRef, PickerProps } from './interface';

export default function generatePicker() {
  type DatePickerProps = PickerProps;

  function getPicker<InnerPickerProps extends DatePickerProps>(picker?: string, displayName?: string) {
    const additonProps: { [key: string]: unknown } = {};
    if (picker) {
      additonProps.picker = picker;
    }
    const Picker = forwardRef<DatePickRef, InnerPickerProps>((props, ref) => <PickerPanel {...props} {...additonProps} ref={ref}></PickerPanel>);

    if (displayName) {
      Picker.displayName = displayName;
    } else {
      Picker.displayName = 'DatePicker';
    }

    return Picker;
  }

  const DatePicker = getPicker<DatePickerProps>();
  // const WeekPicker = getPicker<Omit<DatePickerProps, 'picker'>>('week', 'WeekPicker');

  return {
    DatePicker,
    // WeekPicker
  };
}
