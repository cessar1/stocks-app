import { TransformedStock } from "../../types";

interface StockDetailsProps {
  stockDetail: TransformedStock;
}

export function DetailsHeader({ stockDetail }: StockDetailsProps) {
  return (
    <header>
      <h2>
        {`${stockDetail?.symbol} - ${stockDetail?.name} - ${stockDetail?.currency} `}
      </h2>
    </header>
  )
}
