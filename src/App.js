import './App.css';
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCurrencies} from "./redux/slices/currencySlices";
import {CurrencyTable} from "./components/currencyTable/currencyTable";
import {Header} from "./components/header/header";

function App() {
    const dispatch = useDispatch();
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

export default App;
