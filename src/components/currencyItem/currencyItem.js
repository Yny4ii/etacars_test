import React from 'react';
import {floatFormat} from "../../helpers/floatFormat";

export const CurrencyItem = ({name, rank, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr}) => {
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
            <button>+</button>
        </tr>)
};

