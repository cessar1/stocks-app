import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

interface SearchState {
  searchText: string;
  searchCriteria: 'name' | 'symbol';
}
const initialState: SearchState = {
  searchText: '',
  searchCriteria: 'name',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload
    },
    setSearchCriteria: (state, action: PayloadAction<'name' | 'symbol'>) => {
      state.searchCriteria = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const selectSearchText = (state: RootState) => state.search.searchText;
export const selectSearchCriteria = (state: RootState) => state.search.searchCriteria;

export const { setSearchText, setSearchCriteria } = searchSlice.actions;
