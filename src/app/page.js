"use client";

import React, { useState } from "react";
import UserForm from "./components/Form";
import DupontBlock from "./components/Dupont";

const Home = () => {
  const [tickerData, setTickerData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (ticker) => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchResponse = await fetch("/api/tickerInformation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticker }),
      });

      const data = await fetchResponse.json();
      console.log(data);

      // Handle custom error message
      if (!data || !data.data) {
        setError("Something went wrong with the ticker data.");
      }

      // Save fetched data to state
      setTickerData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const netIncome = tickerData?.data?.IncomeStatement?.[0]?.netIncome;

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-3xl font-bold">Dupont Analysis</h1>
      <UserForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        className=""
      />

      {/* Render DupontBlock only if netIncome is available */}
      {netIncome && (
        <DupontBlock
          netIncome={netIncome}
          revenue={tickerData?.data?.IncomeStatement?.[0]?.revenue}
          totalAssets={tickerData?.data?.BalanceSheet?.[0]?.totalAssets}
          equity={tickerData?.data?.BalanceSheet?.[0]?.totalEquity}
          company={tickerData?.data?.ticker}
        />
      )}


      {/* Display error alert */}
    </div>
  );
};

export default Home;
