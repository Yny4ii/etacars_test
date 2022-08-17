import {Wallet} from "../interfaces/Wallet";

export const calcInitialWallet = (wallet: Wallet[]) => {
    const initialWallet = wallet.reduce((ac, e) => ac + (e.count * e.price), 0)
    return String(initialWallet);
}