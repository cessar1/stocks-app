import { useEffect, useState } from "react";
import { useFetchRealTimeDataQuery, useFetchHistoricalDataQuery } from '../redux/apis/stockApi'
import convertData from "../utils/convertData";
import { ConvertedStockData } from "../types";

export const useStockData = (symbol: string, interval: string, startDate: string, endDate: string, selectedMode: string, pollingInterval: number) => {
  const [stockData, setStockData] = useState<ConvertedStockData[]>([]);

  const { data: realTimeData } = useFetchRealTimeDataQuery({ symbol, interval },
    {
      pollingInterval: pollingInterval,
      skipPollingIfUnfocused: true,
    }
  )
  const { data: historicalData } = useFetchHistoricalDataQuery({ symbol, interval, startDate, endDate });

  useEffect(() => {
    if (selectedMode === 'realTime') {
      setStockData(convertData(realTimeData?.values || []));
    } else if (selectedMode === 'historic') {
      setStockData(convertData(historicalData?.values || []));
    }
  }, [realTimeData, historicalData, selectedMode]);

  return { stockData };
};