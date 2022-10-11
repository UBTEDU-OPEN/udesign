import './index.scss';
import TimePicker from './time-picker';
import RangePicker from './range-picker';

type MergedTimePickerType = typeof TimePicker & {
  RangePicker: typeof RangePicker;
};

const MergedTimePicker = TimePicker as MergedTimePickerType;
MergedTimePicker.RangePicker = RangePicker;

export default MergedTimePicker;
