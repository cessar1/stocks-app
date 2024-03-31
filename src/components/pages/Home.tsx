import { useState } from 'react'
import {
  usePagination,
  useSearch
} from '../../hooks'
import { Table } from '../Table'
import { TableFooterNavigation } from '../TableFooterNavigation'
import TableSearchBar from '../TableSearchBar/TableSearchBar'
import '../../App.css'
import { useFilteredStocks } from '../../hooks/useFilteredStocks'

function Home () {
  const [itemsPerPage, setItemsPerPage] = useState(30)
  const { filteredStocks, isLoading, isError } = useFilteredStocks()
  const {
    searchCriteria,
    handleSearchInputChange,
    handlecriteriaRadioChange
  } = useSearch()
  const {
    currentPageIndex,
    currentItems,
    handleNextPage,
    handlePrevPage,
    pageCount
  } = usePagination({ stocks: filteredStocks, itemsPerPage })

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
  }

  return (
    <div className="App">
      <h1>Stocks App</h1>
      <TableSearchBar
        searchCriteria={searchCriteria}
        onSearchInputChange={handleSearchInputChange}
        onCriteriaRadioChange={handlecriteriaRadioChange}
      />
      <Table currentItems={currentItems} isLoading={isLoading} error={isError} />
      <TableFooterNavigation
        onNextPage={handleNextPage}
        onPreviousPage={handlePrevPage}
        currentPage={currentPageIndex}
        currentItems={currentItems}
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  )
}

export default Home
