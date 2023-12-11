document.addEventListener("DOMContentLoaded", function () {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    // Add some example currencies
    const currencies = ["USD", "EUR", "GBP", "JPY", "CAD"];
    
    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        option1.value = currency;
        option1.text = currency;
        fromCurrencySelect.add(option1);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.text = currency;
        toCurrencySelect.add(option2);
    });
});

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultContainer = document.getElementById("result");

    if (isNaN(amount) || !fromCurrency || !toCurrency) {
        resultContainer.innerText = "Please enter valid amount and select currencies.";
        return;
    }

    // Hardcoded exchange rates (replace these with real rates)
    const exchangeRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
            JPY: 115.50,
            CAD: 1.28
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
            JPY: 129.50,
            CAD: 1.42
        },
        GBP: {
            USD: 1.37,
            EUR: 1.16,
            JPY: 149.50,
            CAD: 1.72
        },
        JPY: {
            USD: 0.0087,
            EUR: 0.0077,
            GBP: 0.0067,
            CAD: 0.0090
        },
        CAD: {
            USD: 0.78,
            EUR: 0.70,
            GBP: 0.58,
            JPY: 110.98
        }
    };

    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const conversionRate = exchangeRates[fromCurrency][toCurrency];
        const result = (amount * conversionRate).toFixed(2);
        resultContainer.innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } else {
        resultContainer.innerText = "Error converting currency. Please try again later.";
    }
}
