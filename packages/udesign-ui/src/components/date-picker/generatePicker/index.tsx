import generateSinglePicker from './generageSinglePicker';
import generageRangePicker from './generageRangePicker';
import './index.scss';

function generatePicker() {
  // =========================== Picker ===========================
  const { DatePicker } = generateSinglePicker();

  // ======================== Range Picker ========================
  const RangPicker = generageRangePicker();

  // =========================== Export ===========================
  type MergedDatePickerType = typeof DatePicker & {
    RangePicker: typeof RangPicker;
  };

  const MergedDatePicker = DatePicker as MergedDatePickerType;
  MergedDatePicker.RangePicker = RangPicker;

  return MergedDatePicker;
}

export default generatePicker;
