
import { CandlestickData, ColorType, Time, createChart } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

interface ChartComponentProps {
  data: CandlestickData<Time>[]
}
export const ChartComponent = ({ data = [] }: ChartComponentProps) => {

  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current!.clientWidth });
      };
      const chartOptions = {
        layout: {
          textColor: 'white',
          background: {
            type: ColorType.Solid,
            color: '#161f27'
          },
        },
        width: chartContainerRef.current!.clientWidth,
        height: 400,
      }

      const chart = createChart(chartContainerRef.current!, chartOptions)
      chart.timeScale().fitContent();


      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350'
      });

      candlestickSeries.setData(data);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        chart.remove();
      };
    },
    [data]
  );

  return (
    <div
      ref={chartContainerRef}
    />
  );
};