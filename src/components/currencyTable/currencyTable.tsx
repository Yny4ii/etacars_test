import React, {useState} from 'react';
import {CurrencyItem} from "../currencyItem/currencyItem";
import Modal from "../modal/modal";
import {useAppSelector} from "../../hooks/hooks";

export const CurrencyTable = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const {currencies, status} = useAppSelector(state => state.currencyReducer)
    console.log(currencies)
    return (
        <>
            {status === 'loading' && <h1>Loading</h1>}
            {status === 'error' && <h1>Error!</h1>}
            {status === 'success' && currencies.length ?
                <div className='container'>
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
                            currencies.map(e => (
                                <CurrencyItem setActive={setModalActive} key={e.id} {...e}/>
                            ))
                        }
                        </tbody>
                    </table>
                </div> : null}
            {modalActive && <Modal setActive={setModalActive}/>}
        </>
    );
};

