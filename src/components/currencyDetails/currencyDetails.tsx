import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {getCurrencyHistory} from "../../redux/slices/currencySlices";
import {LineChart} from "../lineChart/lineChart";
import {Loader} from "../loader/loader";
import Modal from "../modal/modal";
import {floatFormat} from "../../helpers/floatFormat";

export const CurrencyDetails = () => {
    const navigate = useNavigate();
    const [modalActive, setModalActive] = useState<boolean>(false);

    const {status, currencies, history} = useAppSelector(state => state.currencyReducer)
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const currency = currencies.find(e => e.id === id);
    useEffect(() => {
        if (currency !== null) {
            dispatch(getCurrencyHistory(id));

        }
    }, [id, dispatch])

    const onNavigateToCurrencyTable = () => {
        navigate(`/`);
    }

    return (
        <>
            {status === 'loading' && <Loader/>}
            {status === 'error' && <h1>Error!</h1>}
            {status === 'success' && history.length ? (
                <div className='currency-details column'>
                    <div className='row'>
                        <div className='add-button' onClick={() => setModalActive(true)}>+</div>
                        <div onClick={onNavigateToCurrencyTable}>{`<-`}</div>
                    </div>

                    <LineChart history={history}/>
                    <div className="currency-details__info">
                        <div className='currency-details__info-element'>Name: {currency?.name}</div>
                        <div className='currency-details__info-element'>Symbol: {currency?.symbol}</div>
                        <div
                            className='currency-details__info-element'>Price: {currency?.priceUsd ? floatFormat(currency.priceUsd) : 'None'}</div>
                        <div
                            className='currency-details__info-element'>Changed: {currency?.changePercent24Hr ? `${floatFormat(currency.changePercent24Hr)}%` : 'None'}</div>
                    </div>

                </div>) : null}

            {modalActive && <Modal setActive={setModalActive}/>}


        </>

    );
};

