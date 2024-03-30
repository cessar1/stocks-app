import {
  SEARCH_FIELD_SYMBOL,
  SEARCH_FIELD_NAME,
} from '../../constants'
import { RadioInput } from '../RadioInput'
import './TableSearchBar.css'
interface TableSearchBarProps {
  searchCriteria: string
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCriteriaRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function TableSearchBar({ searchCriteria, onSearchInputChange, onCriteriaRadioChange }: TableSearchBarProps) {

  return (
    <div className='table-search-container'>
      <input
        type="text"
        placeholder={`${searchCriteria === 'name' ? 'Netflix, Accel, ...' : 'NFLX, ACCEL ... '}`}
        onChange={onSearchInputChange}
      />
      <RadioInput
        id="symbol"
        value='symbol'
        checked={searchCriteria === 'symbol'}
        onChange={onCriteriaRadioChange}
        label={SEARCH_FIELD_SYMBOL}
      />
      <RadioInput
        id="name"
        value='name'
        checked={searchCriteria === 'name'}
        onChange={onCriteriaRadioChange}
        label={SEARCH_FIELD_NAME} />
    </div >
  )
}


export default TableSearchBar