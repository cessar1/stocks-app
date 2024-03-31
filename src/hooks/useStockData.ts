import { useEffect, useState } from 'react'
import { useFetchRealTimeDataQuery, useFetchHistoricalDataQuery } from '../redux/apis/stockApi'
import convertData from '../utils/convertData'
import { type StockData, type ConvertedStockData } from '../types'

/**
 * Hook para obtener y convertir datos de cotización de acciones.
 * @param symbol - Símbolo de la acción.
 * @param interval - Intervalo de tiempo para la cotización (ej. '1min', '5min', '15min').
 * @param startDate - Fecha de inicio para los datos históricos.
 * @param endDate - Fecha de fin para los datos históricos.
 * @param selectedMode - Modo seleccionado ('realTime' para datos en tiempo real, 'historic' para datos históricos).
 * @param pollingInterval - Intervalo de tiempo para las actualizaciones en tiempo real (en milisegundos).
 * @returns Objeto con el array de datos de cotización convertidos.
 */

export const useStockData = (
  symbol: string,
  interval: string,
  startDate: string,
  endDate: string,
  selectedMode: string,
  pollingInterval: number
) => {
  const [stockData, setStockData] = useState<ConvertedStockData[]>([])

  const { data: realTimeData } = useFetchRealTimeDataQuery({ symbol, interval },
    {
      pollingInterval,
      skipPollingIfUnfocused: true
    }
  )
  const { data: historicalData } = useFetchHistoricalDataQuery({ symbol, interval, startDate, endDate })

  const realTimeDataValues: StockData[] = realTimeData?.values ?? []
  const historicalDataValues: StockData[] = historicalData?.values ?? []

  useEffect(() => {
    // Conversión de los datos dependiendo del modo seleccionado ('realTime' o 'historic')
    if (selectedMode === 'realTime') {
      setStockData(convertData(realTimeDataValues))
    } else if (selectedMode === 'historic') {
      setStockData(convertData(historicalDataValues))
    }
  }, [realTimeData, historicalData, selectedMode])

  return { stockData }
}
