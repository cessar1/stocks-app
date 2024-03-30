import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChartComponent } from '../Chart'
import { RadioInput } from "../RadioInput";
import { IntervalSelector } from "../IntervalSelector";
import { DateRangePicker } from "../DateRangePicker";
import { DetailsHeader } from "../DetailsHeader";
import { useFetchStockDetailsQuery } from '../../redux/apis/stockApi'
import './Details.css'
import { intervalToMillisecondsMap } from "../../constants";

import { useStockData, useDateRange } from '../../hooks'


function Details() {

  const { symbol } = useParams();
  const [selectedMode, setSelectedMode] = useState('realTime');
  const [interval, setInterval] = useState('1min');
  const [pollingInterval, setPollingInterval] = useState(60_000);
  const { startDate, endDate, handleStartDateChange, handleEndDateChange } = useDateRange()
  const { stockData } = useStockData(symbol, interval, startDate, endDate, selectedMode, pollingInterval)


  const { data: stockDetails } = useFetchStockDetailsQuery({ symbol })

  const onSelectedModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMode(event.target.value)
  }

  const onIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newInterval = event.target.value;
    setInterval(newInterval);
    setPollingInterval(intervalToMillisecondsMap[newInterval]);
  };

  return (
    <div className="details-container">
      <DetailsHeader stockDetail={stockDetails?.data[0]} />
      <RadioInput
        id="realTime"
        value='realTime'
        checked={selectedMode === 'realTime'}
        onChange={onSelectedModeChange}
        label={'Tiempo Real'}
      />
      <div className="time-controls">
        <RadioInput
          id="historic"
          value='historic'
          checked={selectedMode === 'historic'}
          onChange={onSelectedModeChange}
          label={'Historico'}
        />
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          disabled={selectedMode === 'realTime'}
        />
      </div>
      <IntervalSelector onChange={onIntervalChange} value={interval} />
      {!stockData.length ? <p>No hay datos disponibles para visualizar el gráfico.</p> : <ChartComponent data={stockData}></ChartComponent>}
    </div >
  )
}

export default Details