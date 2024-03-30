import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://api.twelvedata.com';
const API_KEY = '95480d2d4b0e4956b897e27e0cb3d0be';

const stockApi = createApi({
  reducerPath: 'stocksApiTest',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchRealTimeData: builder.query({
      query: ({ symbol, interval }) => ({
        url: '/time_series',
        params: {
          symbol,
          interval,
          apikey: API_KEY
        }
      })
    }),
    fetchHistoricalData: builder.query({
      query: ({ symbol, interval, startDate, endDate }) => ({
        url: '/time_series',
        params: {
          symbol,
          interval,
          start_date: startDate,
          end_date: endDate,
          apikey: API_KEY
        }
      })
    }),
    getStocks: builder.query({
      query: () => '/stocks'
    }),
    fetchStockDetails: builder.query({
      query: ({ symbol }) => ({
        url: '/stocks',
        params: {
          symbol,
          source: 'docs',
          apikey: API_KEY
        }
      })
    }),
  }),
});

export const { useFetchRealTimeDataQuery, useFetchHistoricalDataQuery, useGetStocksQuery, useFetchStockDetailsQuery } = stockApi;

export default stockApi
