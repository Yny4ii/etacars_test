import { Wallet } from "../../interfaces/Wallet";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  currencies: Wallet[];
}

const storage = localStorage.getItem("wallet");

const initialState: InitialState = {
  currencies: storage ? JSON.parse(storage).currencies : [],
};

const walletSlice = createSlice({
  initialState,
  name: "wallet",
  reducers: {
    addCurrencyToWallet: (state, action: PayloadAction<Wallet>) => {
      state.currencies = [...state.currencies, action.payload];
      localStorage.setItem("wallet", JSON.stringify(state));
    },
    deleteCurrencyFromWallet: (state, action: PayloadAction<string>) => {
      state.currencies = state.currencies.filter(
        (e) => e.id !== action.payload
      );
      localStorage.setItem("wallet", JSON.stringify(state));
    },
  },
});

export const walletReducer = walletSlice.reducer;
export const { addCurrencyToWallet, deleteCurrencyFromWallet } =
  walletSlice.actions;
