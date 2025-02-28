export async function POST(request) {
    // Parse the request body
    const body = await request.json();
    const { ticker } = body;

    // Basic validation: Ensure the ticker is provided
    if (!ticker) {
        return createResponse({ message: "Missing fields" }, 400);
    }

    try {
        const IncomeStatement = await fetchIncomeStatement(ticker);
        const BalanceSheet = await fetchBalanceSheet(ticker);

        const savedData = { id: Date.now(), ticker, IncomeStatement, BalanceSheet };

        // Return success response
        return createResponse({
            message: "Sucessfully fetched data",
            data: savedData,
        });
    } catch (error) {
        // If any error happens, return an error response
        return createResponse({ message: "BRUH" }, 500);
    }
}

async function fetchIncomeStatement(ticker) {
    const apiUrl = `https://financialmodelingprep.com/stable/income-statement?symbol=${ticker}&apikey=${process.env.API_KEY}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch from the external API');
    }

    return response.json(); // Return the parsed JSON data
}

async function fetchBalanceSheet(ticker) {
    const apiUrl = `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${ticker}&apikey=${process.env.API_KEY}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch from the external API');
    }

    return response.json();
}


function createResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' },
    });
}
