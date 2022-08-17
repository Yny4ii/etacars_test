import { Wallet } from "../interfaces/Wallet";
import { Currency } from "../interfaces/Currency";

export const calcInitialWallet = (wallet: Wallet[]) => {
  const initialWallet = wallet.reduce((ac, e) => ac + e.count * e.price, 0);
  return initialWallet;
};

export const calcCurrentWallet = (wallet: Wallet[], currencies: Currency[]) => {
  const a= wallet.reduce((ac, el) => {
    const currency = currencies.find((e) => e.id === el.id);
    const currencyPrice = currency
      ? parseFloat(currency.priceUsd) * el.count
      : 0;

    console.log(currencies)

    return ac + currencyPrice;
  }, 0);
  console.log(a)
  return a;
};
