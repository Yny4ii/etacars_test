import React, {useState} from 'react';
import {CurrencyItem} from "../currencyItem/currencyItem";
import Modal from "../modal/modal";
import {useAppSelector} from "../../hooks/hooks";
import {Loader} from "../loader/loader";
import {Pagination} from "../pagination/Pagination";
import {Currency} from "../../interfaces/Currency";

export const CurrencyTable = () => {
    const {currencies, status} = useAppSelector(state => state.currencyReducer)

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currenciesPerPage] = useState<number>(10);
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);
    const lastCurrenciesIndex = currentPage * currenciesPerPage;
    const firstCurrenciesIndex = lastCurrenciesIndex - currenciesPerPage;
    const currentCurrency = currencies.slice(firstCurrenciesIndex, lastCurrenciesIndex);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    return (
        <>
            {status === 'loading' && <Loader/>}
            {status === 'error' && <h1>Error!</h1>}
            {status === 'success' && currencies.length ?

                <div className='container column'>
                    <table className='table'>
                        <thead>
                        <tr className='table__row'>
                            <th className='table__item'>#</th>
                            <th className='table__item'>Coin</th>
                            <th className='table__item'>Price</th>
                            <th className='table__item'>Market cap</th>
                            <th className='table__item'>VWAP (24Hr)</th>
                            <th className='table__item'>Supply</th>
                            <th className='table__item'>Volume (24Hr)</th>
                            <th className='table__item'>Change (24Hr)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            currentCurrency.map(e => (
                                <CurrencyItem setSelectedCurrency={setSelectedCurrency} setActive={setModalActive}
                                              key={e.id}  {...e}/>
                            ))
                        }
                        </tbody>
                    </table>
                    <Pagination paginate={paginate} currenciesPerPage={currenciesPerPage}
                                totalCurrency={currencies.length}/>
                </div> : null}
            {modalActive && <Modal selectedCurrency={selectedCurrency} setActive={setModalActive}/>}
        </>
    );
};

