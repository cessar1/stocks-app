import { INTERVALS } from '../../constants'
import './IntervalSelector.css'

interface IntervalSelectorProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
}

export function IntervalSelector({ onChange, value }: IntervalSelectorProps) {
  return (
    <div className='interval-selector-container'>
      <label>Intervalo</label>
      <select onChange={onChange} value={value}>
        {INTERVALS.map(interval => (
          <option key={interval.value} value={interval.value}>
            {interval.label}
          </option>
        ))}
      </select>
    </div>
  )
}

