import { type Stock } from '../../types'
import './TableFooterNavigation.css'

interface TableFooterNavigationProps {
  currentPage: number
  currentItems: Stock[]
  itemsPerPage: number
  pageCount: number
  onNextPage: () => void
  onPreviousPage: () => void
  onItemsPerPageChange: (itemsPerPage: number) => void
}
export function TableFooterNavigation ({
  onNextPage,
  onPreviousPage,
  currentPage,
  currentItems,
  itemsPerPage,
  pageCount,
  onItemsPerPageChange
}: TableFooterNavigationProps) {
  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(event.target.value)
    onItemsPerPageChange(newItemsPerPage)
  }

  return (
    <div className="footer-container">
      <span>Página {currentPage} de {pageCount}</span>
      <button onClick={onPreviousPage} disabled={currentPage === 1}>Anterior</button>
      <button onClick={onNextPage} disabled={currentItems.length < itemsPerPage}>Siguiente</button>
      <select onChange={handleItemsPerPageChange} value={itemsPerPage}>
        <option value={10}>10 resultados por página</option>
        <option value={20}>20 resultados por página</option>
        <option value={30}>30 resultados por página</option>
      </select>
    </div>

  )
}
