import { type Stock } from '../../types'

interface StockDetailsProps {
  stockDetail: Stock
}

export function DetailsHeader ({ stockDetail }: StockDetailsProps) {
  return (
    <header>
      {stockDetail !== undefined && <h2>
        {`${stockDetail?.symbol} - ${stockDetail?.name} - ${stockDetail?.currency} `}
      </h2>}
    </header>
  )
}
