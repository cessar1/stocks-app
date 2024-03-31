import debounce from 'lodash/debounce'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText, setSearchCriteria, selectSearchCriteria } from '../redux/searchSlice'

type SearchCriteria = 'name' | 'symbol'

export function useSearch () {
  const dispatch = useDispatch()
  const searchCriteria = useSelector(selectSearchCriteria)

  const handleSearchInputChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value))
  }, 300)

  const handlecriteriaRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchCriteria(event.target.value as SearchCriteria))
  }

  return {
    searchCriteria,
    handleSearchInputChange,
    handlecriteriaRadioChange

  }
}
