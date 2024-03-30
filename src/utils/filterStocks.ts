import { type Stock } from "../types";

export function filterStocks(
  stocks: Stock[],
  searchText: string,
  filterCriteria: 'name' | 'symbol'
): Stock[] {

  return stocks.filter(stock => {
    const textToFilter = filterCriteria === 'name' ? stock.name : stock.symbol;
    return textToFilter.toLowerCase().includes(searchText.toLowerCase());
  });

}