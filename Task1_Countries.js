require('dotenv').config();
const COUNTRY_API_URL = process.env.COUNTRY_API_URL;

const { searchByCode } = require('./Task1_Currencies.js');

async function fetchCountries() {
    const countriesResponse = await fetch(COUNTRY_API_URL);
     countries = await countriesResponse.json();
     return countries;
}

async function searchByName(name) {
    const countries = await fetchCountries();
    const country = countries.countries.country.find(country => country.countryName === name);
    return country;
}

async function searchByCapital(capital) {
    const countries = await fetchCountries();
    const country = countries.countries.country.find(country => country.capital === capital);
    return country;
}

async function getCurrencyCodesV1() {
    const countries = await fetchCountries();
    const currencyCodes = countries.countries.country
    .map(country => ({currencyCode:country.currencyCode}));

    return currencyCodes.filter((code,index) => currencyCodes.indexOf(code) === index);
};

async function getCurrencyCodesV2() {
    const countries = await fetchCountries();
    const currencyCodes = countries.countries.country
    .map(country => ({currencyCode:country.currencyCode}));

    return new Set(currencyCodes);
};

searchByName('Andorra la Vella')
.then(country => {
    if(country === undefined)
        console.log('Country not found');
    else {
    searchByCode(country.currencyCode)
    .then(currency=> console.log(JSON.stringify(currency)));
    console.log(JSON.stringify(country));
    }
});

searchByCapital('Andorra la Vella')
.then(country => {
    if(country === undefined)
        console.log('Country not found');
    else {
    searchByCode(country.currencyCode)
    .then(currency=> console.log(JSON.stringify(currency)));
    console.log(JSON.stringify(country));
    }
});

getCurrencyCodesV1().
then(currencyCodes => console.log(currencyCodes.size));

getCurrencyCodesV2().
then(currencyCodes => console.log(currencyCodes.size));