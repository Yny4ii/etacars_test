import React, {useEffect} from 'react';
import {getCurrencies, getCurrencyHistory} from "./redux/slices/currencySlices";
import {CurrencyTable} from "./components/currencyTable/currencyTable";
import {Header} from "./components/header/header";
import {useAppDispatch} from "./hooks/hooks";
import {LineChart} from "./components/lineChart/lineChart";

export const App = (): JSX.Element => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCurrencies())
        dispatch(getCurrencyHistory('bitcoin'))

    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <CurrencyTable/>
            <LineChart/>
        </div>
    );
}

