import React from "react";

import { Tooltip } from "react-tooltip";

export default function DupontBlock({netIncome, revenue, totalAssets, equity, company}) {
    const pStyle = "text-2xl font-bold text-gray-400";

    const colorMap = [
      "text-red-500", // 0.00 - 0.10
      "text-red-600", // 0.10 - 0.20
      "text-red-700", // 0.20 - 0.30
      "text-red-800", // 0.30 - 0.40
      "text-yellow-500", // 0.40 - 0.50
      "text-yellow-600", // 0.50 - 0.60
      "text-yellow-700", // 0.60 - 0.70
      "text-green-500", // 0.70 - 0.80
      "text-green-600", // 0.80 - 0.90
      "text-green-700", // 0.90 - 1.00
    ];

    const ratio = (netIncome / revenue) * (revenue / totalAssets) * (totalAssets / equity);
    const index = Math.min(Math.floor(ratio * 10), 9);
    const textColor = colorMap[index];

    return (
      <div className="flex align-center mt-8 flex-col items-center w-1/2 justify-center bg-blue-50 p-4 rounded-lg">
        <h1 className="text-2xl font-medium">
          Your Analysis for <strong>{company}</strong> is ready
        </h1>
        <div className="flex flex-row items-center gap-2 m-2">
          <Tooltip id="net-income-to-revenue" />
          <div
            className="text-6xl font-black"
            data-tip="Net Income / Revenue"
            data-tooltip-id="net-income-to-revenue"
            data-tooltip-content="Net Income / Revenue"
            data-tooltip-place="bottom"
          >
            <p>{(netIncome / revenue).toFixed(2)}</p>
          </div>
          <p className={pStyle}>*</p>
          <Tooltip id="revenue-to-total-assets" />
          <div
            className="text-6xl font-black"
            data-tip="Revenue / Total Assets"
            data-tooltip-id="revenue-to-total-assets"
            data-tooltip-content="Revenue / Total Assets"
            data-tooltip-place="bottom"
          >
            <p>{(revenue / totalAssets).toFixed(2)}</p>
          </div>
          <p className={pStyle}>*</p>
          <Tooltip id="total-assets-to-equity" />
          <div
            className="text-6xl font-black"
            data-tip="Total Assets / Equity"
            data-tooltip-id="total-assets-to-equity"
            data-tooltip-content="Total Assets / Equity"
            data-tooltip-place="bottom"
          >
            <p>{(totalAssets / equity).toFixed(2)}</p>
          </div>
          <p className={pStyle}>=</p>
          <div
            className={`text-6xl font-black ${textColor} transition-colors duration-300`}
          >
            <p>{ratio.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
}