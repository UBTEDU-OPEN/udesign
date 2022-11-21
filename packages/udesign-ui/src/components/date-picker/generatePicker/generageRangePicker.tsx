import React, { forwardRef } from 'react';
import RangePicker from './range-picker';
import type { RangePickRef, RangePickerProps } from './interface';

export default function generatePicker() {
  type RangeDatePickerProps = RangePickerProps;

  const Picker = forwardRef<RangePickRef, RangeDatePickerProps>((props, ref) => <RangePicker {...props} ref={ref}></RangePicker>);

  Picker.displayName = 'RangePick';
  return Picker;
}
