
# Simple Next.js App for Analyzing Company Economic Situation Using the DuPont Model

This project was inspired by an economics lecture on financial management and aims to provide a simple tool for analyzing a company's economic performance using the DuPont Model. It allows users to get insights into how well a company is performing based on its financial ratios, which ultimately help in assessing the company’s profitability, efficiency, and leverage.

## DuPont Model Explanation

The DuPont Model, developed by the DuPont Corporation, breaks down Return on Equity (ROE) into three key components:

1. **Profit Margin**: Measures the company's ability to generate profit from its sales.  
   Formula: **Net Income / Revenue**

2. **Asset Turnover**: Shows how efficiently a company uses its assets to generate sales.  
   Formula: **Revenue / Total Assets**

3. **Equity Multiplier**: Indicates the level of financial leverage employed by the company.  
   Formula: **Total Assets / Shareholders' Equity**

The DuPont model can be represented as:

**ROE = Profit Margin × Asset Turnover × Equity Multiplier**

By breaking ROE into these three components, the model helps investors and analysts understand what is driving the company's return on equity—whether it’s profitability, asset efficiency, or leverage.

---

## Installation

To get started with the project locally, follow these steps:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/dupont-analysis-app.git
   cd dupont-analysis-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

> Additionally, you would need to acquire an api-key from [FMP](https://site.financialmodelingprep.com/) and insert it to .env file

---

## Usage
As simple as possible - just input ticker of company you are interested in
> live demo available via [vercel](https://dupont-analyzer.vercel.app/)


---

## Roadmap
- **Test Coverage**: write tests for the application
- **Additional Functionality**: add popup with detailed information regarding each parameter
- **Mobile Responsiveness**: Ensure that the app is fully functional on mobile devices.
- **User Authentication**: Add user accounts for saving financial analysis history.
- **Export Feature**: Enable users to export financial reports (e.g., CSV or PDF).
- **Visualization**: Add charts and graphs to visualize the DuPont components.
- **Internationalization**: Support multiple languages for global usage.
- **Dark Mode**: Allow users to switch to a dark theme for a better user experience.
