import React from 'react';
import {floatFormat} from "../../helpers/floatFormat";
import {useNavigate} from "react-router-dom";
import {Currency} from "../../interfaces/Currency";

interface CurrencyItemProps {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    setActive: (option: boolean) => void;
    setSelectedCurrency: (option: Currency) => void;
}


export const CurrencyItem = ({
                                 id,
                                 rank,
                                 symbol,
                                 name,
                                 supply,
                                 maxSupply,
                                 marketCapUsd,
                                 volumeUsd24Hr,
                                 priceUsd,
                                 changePercent24Hr,
                                 vwap24Hr,
                                 setActive,
                                 setSelectedCurrency
                             }: CurrencyItemProps) => {
    const navigate = useNavigate();
    const onNavigateToCurrencyDetails = (id: string) => {
        navigate(`/currency/${id}`)
    }
    const onClickPlusButton = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActive(true)
        const currency = {
            id,
            rank,
            symbol,
            name,
            supply,
            maxSupply,
            marketCapUsd,
            volumeUsd24Hr,
            priceUsd,
            changePercent24Hr,
            vwap24Hr
        }
        setSelectedCurrency(currency);
    }

    return (
        <tr className='table__row' onClick={() => onNavigateToCurrencyDetails(id)}>
            <td className='table__item'>{rank}</td>
            <td className='table__item'>{name}</td>
            <td className='table__item'>${floatFormat(priceUsd)}</td>
            <td className='table__item'>${floatFormat(marketCapUsd)}</td>
            <td className='table__item'>${floatFormat(vwap24Hr)}</td>
            <td className='table__item'>{floatFormat(supply)}</td>
            <td className='table__item'>${floatFormat(volumeUsd24Hr)}</td>
            <td className='table__item'>{floatFormat(changePercent24Hr)}%</td>
            <td className='table__item'>
                <div className='add-button' onClick={onClickPlusButton}>+</div>
            </td>
        </tr>
    )
};

