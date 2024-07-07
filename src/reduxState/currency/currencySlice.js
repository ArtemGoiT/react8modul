import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatesSymbols,
} from './operations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
  isLoding: false,
  isError: null,
  rates: [],
};
const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoding = true;
        state.isError = null;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.isLoding = false;
        state.exchangeInfo = payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, { payload }) => {
        state.isLoding = false;
        state.isError = payload;
        state.exchangeInfo = null;
      })
      .addCase(fetchLatesSymbols.pending, state => {
        state.isLoding = true;
        state.isError = null;
      })
      .addCase(fetchLatesSymbols.fulfilled, (state, { payload }) => {
        state.isLoding = false;
        state.rates = payload;
      })
      .addCase(fetchLatesSymbols.rejected, (state, { payload }) => {
        state.isLoding = false;
        state.isError = payload;
        state.rates = [];
      }),
});
export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
