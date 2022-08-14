import {currencyReducer} from './slices/currencySlices'
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        currencyReducer
    }
})

export default store;