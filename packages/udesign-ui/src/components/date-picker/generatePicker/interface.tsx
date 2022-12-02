import type { Component, ForwardedRef } from 'react';

import { PickerProps as DatePicker } from './date-picker';
import { RangePickerBaseProps } from './range-picker';

// Picker Props
export type PickerDateProps = DatePicker;

export type PickerProps = PickerDateProps;

// Range Picker Props
export type RangePickerDateProps = RangePickerBaseProps;

export type RangePickerProps = RangePickerDateProps;

export interface CommonPickerMethods {
  focus: () => void;
  blur: () => void;
}

export type PickerRef<P> = ForwardedRef<Component<P> & CommonPickerMethods>;

export type DatePickRef = PickerRef<PickerProps>;

export type RangePickRef = PickerRef<RangePickerProps>;
