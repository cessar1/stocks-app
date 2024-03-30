export interface Stock {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export interface TransformedStock {
  name: string;
  symbol: string;
  currency: string;
  type?: string
}

export type SearchCriteria = 'name' | 'symbol'

export interface StockData {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface ConvertedStockData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IntervalToMillisecondsMap {
  [key: string]: number;
}
