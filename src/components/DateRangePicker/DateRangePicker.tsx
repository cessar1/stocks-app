import { DatePicker } from '../DatePicker';
import './DateRangePicker.css'
interface DateRangePickerProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  disabled?: boolean;
}

export function DateRangePicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  disabled = false,
}: DateRangePickerProps) {
  const handleStartDateChange = (date: string) => {
    onStartDateChange(date);
  };

  const handleEndDateChange = (date: string) => {
    onEndDateChange(date);
  };

  return (
    <div className='date-range-picker-container'>
      <DatePicker
        labelText="Desde"
        inputId="startDate"
        inputName="startDate"
        value={startDate}
        disabled={disabled}
        onChange={handleStartDateChange}
      />
      <DatePicker
        labelText="Hasta"
        inputId="endDate"
        inputName="endDate"
        value={endDate}
        disabled={disabled}
        onChange={handleEndDateChange}
      />
    </div>
  );
}

