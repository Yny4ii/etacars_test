import React from 'react';
import {floatFormat} from "../../helpers/floatFormat";

interface CurrencyItemProps {
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
    return (
        <tr className="table__row">
            <td className='table__item'>{rank}</td>
            <td className='table__item'>{name}</td>
            <td className='table__item'>${floatFormat(priceUsd)}</td>
            <td className='table__item'>${floatFormat(marketCapUsd)}</td>
            <td className='table__item'>${floatFormat(vwap24Hr)}</td>
            <td className='table__item'>{floatFormat(supply)}</td>
            <td className='table__item'>${floatFormat(volumeUsd24Hr)}</td>
            <td className='table__item'>{floatFormat(changePercent24Hr)}%</td>
            <button onClick={() => setActive(true)}>+</button>
        </tr>)
};

