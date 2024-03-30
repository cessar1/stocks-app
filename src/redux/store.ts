import { configureStore } from '@reduxjs/toolkit'
import stockApi from './apis/stockApi';
import searchSlice from './searchSlice';

const rootReducer = {
  search: searchSlice,
  [stockApi.reducerPath]: stockApi.reducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stockApi.middleware),
})


export type RootState = ReturnType<typeof rootReducer>;
export default store