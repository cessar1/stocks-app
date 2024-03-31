import { useState } from 'react'
import { type Stock } from '../types'

interface PaginationProps {
  stocks: Stock[]
  itemsPerPage: number
}

export function usePagination ({ stocks = [], itemsPerPage }: PaginationProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  const lastPageIndex = currentPageIndex * itemsPerPage
  const firstPageIndex = lastPageIndex - itemsPerPage
  const totalItems = stocks.length
  const currentItems = stocks.slice(firstPageIndex, lastPageIndex)
  const pageCount = Math.ceil(stocks.length / itemsPerPage)

  const handleNextPage = () => {
    setCurrentPageIndex(currentPageIndex + 1)
  }

  const handlePrevPage = () => {
    setCurrentPageIndex(currentPageIndex - 1)
  }

  return {
    currentPageIndex,
    currentItems,
    handleNextPage,
    handlePrevPage,
    pageCount,
    firstPageIndex,
    lastPageIndex,
    totalItems

  }
}
