require('dotenv').config();
const CURRENCY_API_URL = process.env.CURRENCY_API_URL;


async function fetchCurrencies() {
    try {
        const currenciesResponse = await fetch(CURRENCY_API_URL);
        const currencies = await currenciesResponse.json();
        return currencies;
    } catch (error) {
        console.error('Error ocurred while fetching currencies from API', error);
        throw error;
    }
}

async function searchByName(name) {
    try {
        const currencies = await fetchCurrencies();
        const currency = Object.values(currencies).find(currency => currency.name === name)
        if (currency === undefined)
            throw Error('Currency Not Found');
        return currency;
    } catch (error) {
        console.error('Error ocurred while search', error);
        throw error;
    }
}

async function searchByCode(code) {
    try {
        const currencies = await fetchCurrencies();
        for (const currency of Object.values(currencies))
            if (currency.code == code)
                return currency;

        throw Error('Currency Not Found');
    } catch (error) {
        console.error('Error ocurred while search', error);
        throw error;
    }
}

async function getCurrencies() {
    const currencies = await fetchCurrencies();

    return Object.values(currencies).map(
        currency => ({
            name: currency.name,
            code: currency.code
        }));
}

async function getCurrenciesPage(pageNumber, elementsPerPage) {
    const currencies = await fetchCurrencies();
    const start = (pageNumber - 1) * elementsPerPage;
    const end = start + elementsPerPage;

    return Object.values(currencies).slice(start, end).map(
        currency => ({
            name: currency.name,
            code: currency.code
        }));
}

//Client Code
searchByName('Eurmmo')
    .then(currency => console.log(JSON.stringify(currency)))
    .catch(err => console.log(err));

getCurrencies()
    .then(currenciesDTOs => currenciesDTOs.forEach(currencyDTO => {
        console.log(JSON.stringify(currencyDTO));
    }));

getCurrenciesPage(1, 5)
    .then(currenciesDTOs => currenciesDTOs.forEach(currencyDTO => {
        console.log(JSON.stringify(currencyDTO));
    }));

module.exports.searchByCode = searchByCode;
