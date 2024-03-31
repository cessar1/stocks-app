import { type StockData } from '../types'

function convertData (data: StockData[]) {
  return data.map(stockData => {
    const date = new Date(stockData.datetime)
    const unixTime = Math.floor(date.getTime() / 1000)

    return {
      open: parseFloat(stockData.open),
      high: parseFloat(stockData.high),
      low: parseFloat(stockData.low),
      close: parseFloat(stockData.close),
      time: unixTime
    }
  }).reverse()
}

export default convertData
