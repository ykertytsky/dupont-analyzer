export default function DupontBlock({netIncome, revenue, totalAssets, equity}) {
    const pStyle = "text-2xl font-bold text-gray-400";
    return (
      <div className="flex align-center mt-8 flex-col items-center w-1/2 justify-center bg-blue-50 p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Your Analysis is ready</h1>
        <div className="flex flex-row items-center gap-2 m-2">
          <div className="text-6xl font-black">
            <p>{(netIncome / revenue).toFixed(2)}</p>
          </div>
          <p className={pStyle}>*</p>
          <div className="text-6xl font-black">
            <p>{(revenue / totalAssets).toFixed(2)}</p>
          </div>
          <p className={pStyle}>*</p>
          <div className="text-6xl font-black">
            <p>{(totalAssets / equity).toFixed(2)}</p>
          </div>
          <p className={pStyle}>=</p>
          <div className="text-6xl font-black">
            <p>
              {(
                (netIncome / revenue) *
                (revenue / totalAssets) *
                (totalAssets / equity)
              ).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
}