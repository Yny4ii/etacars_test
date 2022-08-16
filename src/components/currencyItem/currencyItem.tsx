import React from 'react';
import {floatFormat} from "../../helpers/floatFormat";
import {useNavigate} from "react-router-dom";

interface CurrencyItemProps {
    id: string,
    name: string;
    rank: string;
    priceUsd: string;
    marketCapUsd: string;
    vwap24Hr: string;
    supply: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
    setActive: (option: boolean) => void;
}

export const CurrencyItem = ({
                                 id,
                                 name,
                                 rank,
                                 priceUsd,
                                 marketCapUsd,
                                 vwap24Hr,
                                 supply,
                                 volumeUsd24Hr,
                                 changePercent24Hr,
                                 setActive
                             }: CurrencyItemProps) => {
    const navigate = useNavigate();
    const onNavigateToCurrencyDetails = (id: string) => {
        navigate(`/currency/${id}`)
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
            <td className='table__item' >
                <div className='add-button' onClick={() => setActive(true)} >+</div>
            </td>
        </tr>
    )
};

