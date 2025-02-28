"use client";

import React, { useState } from "react";
import UserForm from "./components/Form";
import DupontBlock from "./components/Dupont";

const Home = () => {
  const [tickerData, setTickerData] = useState(null); // State for storing fetched data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (ticker) => {
    setIsLoading(true);
    setError(null);

    try {
      // Corrected API path based on your file structure
      const fetchResponse = await fetch("/api/tickerInformation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ticker }),
      });

      const data = await fetchResponse.json();

      // Save fetched data to state
      setTickerData(data);
    } catch (error) {
      setError(`An error occurred: ${error}.`);
    } finally {
      setIsLoading(false);
    }
  };

  // netIncome will only be accessed when tickerData is available
  const netIncome = tickerData?.data?.IncomeStatement?.[0]?.netIncome;

  return (
    <div className="flex flex-col items-center justify-center">
      <UserForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        className=""
      />

      {/* Render DupontBlock only if netIncome is available */}
      {netIncome ? (
        <DupontBlock
          netIncome={netIncome}
          revenue={tickerData?.data?.IncomeStatement?.[0]?.revenue} // You can access other data here as well
          totalAssets={tickerData?.data?.BalanceSheet?.[0]?.totalAssets}
          equity={tickerData?.data?.BalanceSheet?.[0]?.totalEquity}
        />
      ) : (
        <p>Loading...</p>
      )}

      {/* You can also render the error or loading state here */}
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Home;
