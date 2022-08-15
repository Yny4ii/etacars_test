import React from 'react';
import {floatFormat} from "../../helpers/floatFormat";
import {useAppSelector} from "../../hooks/hooks";

export const Header = () => {
    const currencies = useAppSelector(state => state.currencyReducer.currencies).slice(0, 3);
    return (
        <header className='header'>
            <div className='header__container'>
                <ul className='top-currency'>
                    {currencies.map(e => (
                        <li className="top-currency__item" key={e.id}>{e.name} - ${floatFormat(e.priceUsd)}</li>
                    ))}
                </ul>
                <div className="header__wallet">
                    123
                </div>
            </div>

        </header>
    );
};

