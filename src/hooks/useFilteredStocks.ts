import { useSelector } from 'react-redux'
import { useGetStocksQuery } from '../redux/apis/stockApi'
import { type Stock } from '../types'
import { selectSearchCriteria, selectSearchText } from '../redux/searchSlice'

/**
 * Custom hook para filtrar los stocks por criterio de búsqueda y texto.
 * @param searchText El texto de búsqueda.
 * @param searchCriteria El criterio de búsqueda ('name' o 'symbol').
 * @returns Un objeto que contiene los stocks filtrados, estado de carga y estado de error.
 */

export const useFilteredStocks = () => {
  // Obtenemos los stocks utilizando RTK Query
  const { data, isLoading, isError } = useGetStocksQuery(undefined)

  const searchText: string = useSelector(selectSearchText)
  const searchCriteria: string = useSelector(selectSearchCriteria)
  const stocks: Stock[] = data?.data ?? []

  let filteredStocks: Stock[]
  if (searchText.trim() !== '') {
    filteredStocks = stocks.filter((stock) => {
      if (searchCriteria === 'name') {
        return stock.name.toLowerCase().includes(searchText.toLowerCase())
      } else if (searchCriteria === 'symbol') {
        return stock.symbol.toLowerCase().includes(searchText.toLowerCase())
      }
      return false
    })
  } else {
    filteredStocks = stocks
  }

  return { filteredStocks, isLoading, isError }
}
