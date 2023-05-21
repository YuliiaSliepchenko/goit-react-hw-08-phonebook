import { createSlice } from '@reduxjs/toolkit';

const filterState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
