import './RadioInput.css'

interface RadioInputProps {
  id: string
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}

export function RadioInput ({ id, value, checked, onChange, label }: RadioInputProps) {
  return (
    <div className='radio-input-container'>
      <input
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
