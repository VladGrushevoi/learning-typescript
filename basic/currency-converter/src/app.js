const headerElement = document.getElementById("header");
const left = document.getElementById("left");
const right = document.getElementById("right");
const reverseButton = document.getElementById("reverse-button");
let currencySelector = document.getElementById("currency-selector");
let uahInput = document.getElementById("input-uah");
let currencyInput = document.getElementById("input-currency");
const currenciesData = [
    {
        Code: 840,
        ShortName: 'USD'
    },
    {
        Code: 978,
        ShortName: 'EURO'
    }
];
let currenciesRate = GetExchangesRate();
reverseButton.addEventListener('click', (e) => {
    const leftTempHtml = left.innerHTML;
    left.innerHTML = right.innerHTML;
    right.innerHTML = leftTempHtml;
    uahInput = document.getElementById("input-uah");
    currencyInput = document.getElementById("input-currency");
    currencySelector = document.getElementById("currency-selector");
    uahInput.addEventListener('change', async (e) => {
        const valueUAH = parseInt(uahInput.value);
        const currencyCode = currencySelector.value;
        const currenciesRateData = await currenciesRate;
        const currencyRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode));
        currencyInput.value = (valueUAH / currencyRate.rateSell).toFixed(2).toString();
    });
    currencyInput.addEventListener('change', async (e) => {
        const valueCurrency = parseInt(currencyInput.value);
        const currencyCode = currencySelector.value;
        const currenciesRateData = await currenciesRate;
        const currencyRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode));
        uahInput.value = (valueCurrency * currencyRate.rateSell).toFixed(2).toString();
    });
});
uahInput.addEventListener('change', async (e) => {
    const valueUAH = parseInt(uahInput.value);
    const currencyCode = currencySelector.value;
    const currenciesRateData = await currenciesRate;
    const currencyRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode));
    currencyInput.value = (valueUAH / currencyRate.rateSell).toFixed(2).toString();
});
currencyInput.addEventListener('change', async (e) => {
    const valueCurrency = parseInt(currencyInput.value);
    const currencyCode = currencySelector.value;
    const currenciesRateData = await currenciesRate;
    const currencyRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode));
    uahInput.value = (valueCurrency * currencyRate.rateSell).toString();
});
const buildCurrenceNow = (element) => {
    let html = ``;
    currenciesRate.then(rates => {
        rates.forEach(rate => {
            element.innerHTML += `<div class="currence-now">
            <div class="name-currency">
                ${currenciesData.find(i => i.Code === rate.currencyCodeA).ShortName}
            </div>
            <div class="buy-currence">
                ${rate.rateBuy}
            </div>
            <div class="divider-currency">
                /
            </div>
            <div class="sell-currency">
                ${rate.rateSell}
            </div>
        </div>`;
        });
    });
    return html;
};
const buildSelectorOptions = (selectorElem) => {
    currenciesData.forEach(i => selectorElem.innerHTML += `<option value=${i.Code}>${i.ShortName}</option>`);
};
buildCurrenceNow(headerElement);
buildSelectorOptions(currencySelector);
async function GetExchangesRate() {
    const url = `https://api.monobank.ua/bank/currency`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error! Status code ${response.status}`);
    }
    const currencyCodeA = currenciesData.map(i => i.Code);
    const result = (await response.json());
    const fitlering = result.filter(er => er.currencyCodeB === 980 && currencyCodeA.includes(er.currencyCodeA));
    return fitlering;
}
//# sourceMappingURL=app.js.map