require('dotenv').config();
const CURRENCY_API_URL = process.env.CURRENCY_API_URL;


async function fetchCurrencies() {
    const currenciesResponse = await fetch(CURRENCY_API_URL);
     currencies = await currenciesResponse.json();
     return currencies;
}

async function searchByName(name) {
    const currencies = await fetchCurrencies();
     for (const currency of Object.values(currencies))
        if(currency.name == name)
            return currency;

    return 'Currency Not Found';
}

async function searchByCode(code) {
    const currencies = await fetchCurrencies();
     for (const currency of Object.values(currencies))
        if(currency.code == code)
            return currency;

    return 'Currency Not Found';
}

async function getCurrencies() {
    const currencies = await fetchCurrencies();

    return Object.values(currencies).map(
        currency => ({
            name: currency.name,
            code: currency.code
        }));
}

async function getCurrenciesPage(pageNumber,elementsPerPage) {
    const currencies = await fetchCurrencies();
    const start = (pageNumber - 1) * elementsPerPage;
    const end = start + elementsPerPage;

    return Object.values(currencies).slice(start,end).map(
        currency => ({
            name: currency.name,
            code: currency.code
        }));
}

//Client Code
searchByName('Euro')
.then(currency=> console.log(JSON.stringify(currency)));

getCurrencies()
.then(currenciesDTOs => currenciesDTOs.forEach(currencyDTO => {
    console.log(JSON.stringify(currencyDTO));
}));

getCurrenciesPage(1,5)
.then(currenciesDTOs => currenciesDTOs.forEach(currencyDTO => {
    console.log(JSON.stringify(currencyDTO));
}));

module.exports.searchByCode = searchByCode;
