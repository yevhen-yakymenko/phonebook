import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts: (state, action) => (state = action.payload),
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
