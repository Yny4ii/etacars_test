import './App.css';
import {useEffect} from "react";
import {getCurrencies} from "./redux/slices/currencySlices";
import {CurrencyTable} from "./components/currencyTable/currencyTable";
import {Header} from "./components/header/header";
import {useAppDispatch} from "./hooks/hooks";

export const App = (): JSX.Element => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getCurrencies())
    }, [dispatch])
    return (
        <div className="App">
            <Header/>
            <CurrencyTable/>
        </div>
    );
}

