import React, { useState } from "react";
import { floatFormat } from "../../helpers/floatFormat";
import { useAppSelector } from "../../hooks/hooks";
import { calcInitialWallet } from "../../helpers/calcWallet";
import { WalletModal } from "../walletModal/walletModal";

export const Header = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const { currencies: walletCurrency } = useAppSelector(
    (state) => state.walletReducer
  );
  const currencies = useAppSelector(
    (state) => state.currencyReducer.currencies
  ).slice(0, 3);
  return (
    <header className="header">
      <ul className="top-currency">
        {currencies.map((e) => (
          <li className="top-currency__item" key={e.id}>
            {e.name} - ${floatFormat(e.priceUsd)}
          </li>
        ))}
      </ul>
      <div className="header__wallet" onClick={() => setModalActive(true)}>
        <div className='header__wallet-info'>
          <div>${floatFormat(calcInitialWallet(walletCurrency))}</div>
          <div>12%</div>
          <div>+$163</div>
        </div>
      </div>
      {modalActive && (
        <WalletModal
          walletCurrency={walletCurrency}
          setActive={setModalActive}
        />
      )}
    </header>
  );
};
