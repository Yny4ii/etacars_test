import React, { useEffect } from "react";
import { getCurrencies } from "./redux/slices/currencySlices";
import { CurrencyTable } from "./components/currencyTable/currencyTable";
import { Header } from "./components/header/header";
import { useAppDispatch } from "./hooks/hooks";
import { Route, Routes } from "react-router-dom";
import { LineChart } from "./components/lineChart/lineChart";
import { CurrencyDetails } from "./components/currencyDetails/currencyDetails";

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<CurrencyTable />} />
          <Route path="currency/:id" element={<CurrencyDetails />} />
        </Routes>
      </div>
    </>
  );
};
