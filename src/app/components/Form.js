'use client';
import { useState } from "react";

export default function UserForm({ onSubmit, isLoading, error }) {
    const [ticker, setTicker] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(ticker); // Pass the ticker value to the parent
    };

    const handleChange = (e) => {
        setTicker(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-center">
                    <input
                        id="ticker"
                        name="ticker"
                        type="text"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)}
                        className="m-4 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Enter Company Ticker..."
                        required
                    />
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                        type="submit"
                        disabled={isLoading || !ticker.trim()}
                    >
                        {isLoading ? 'Analyzing...' : 'Analyze'}</button>
                </div>
            </form>
            {error && (
                <div className="p-4 mb-4 bg-red-100 text-red-700 rounded-md">
                    <p className="font-medium">Error:</p>
                    <p>{error}</p>
                </div>
            )}
        </div>
    )
}