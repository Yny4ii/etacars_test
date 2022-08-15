import axios from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Currency} from "../../interfaces/Currency";

const api = 'https://api.coincap.io/v2/assets';

interface InitialState {
    status: string;
    currencies: Currency[];

}

const initialState: InitialState = {
    currencies: [],
    status: 'loading'
}

export const getCurrencies = createAsyncThunk('/currency/getCurrencies', async () => {
    const response = await axios.get(api);
    return await response.data.data;

})

const currencySlice = createSlice({
    name: 'currency', initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrencies.fulfilled, (state, action: PayloadAction<Currency[]>) => {
            state.status = 'success';
            state.currencies = action.payload;
        });
        builder.addCase(getCurrencies.rejected, (state) => {
            state.status = 'error';
            state.currencies = [];

        });
        builder.addCase(getCurrencies.pending, (state) => {
            state.status = 'loading';
            state.currencies = [];
        });
    }
})

export const currencyReducer = currencySlice.reducer;
