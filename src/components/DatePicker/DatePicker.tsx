import './DatePicker.css'

interface DatePickerProps {
  labelText: string
  inputId: string
  inputName: string
  disabled: boolean
  onChange: (date: string) => void
  value: string
}

export function DatePicker({ labelText, inputId, inputName, disabled, onChange, value }: DatePickerProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  };

  return (
    <div className='date-picker'>
      <label htmlFor={inputId}>{labelText}</label>
      <input type="datetime-local" id={inputId} name={inputName} disabled={disabled} onChange={handleChange} value={value} />
    </div>
  );
}

