import axios from "axios";
import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";

const api = 'https://api.coincap.io/v2/assets';

const initialState = {
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
    extraReducers: {
        [getCurrencies.fulfilled]: (state, action) => {
            state.status = 'success';
            state.currencies = action.payload;
        },
        [getCurrencies.rejected]: (state) => {
            state.status = 'error';
            state.currencies = [];
        },
        [getCurrencies.pending]: (state) => {
            state.status = 'loading';
            state.currencies = [];
        }
    }
})

export const currencyReducer = currencySlice.reducer;
