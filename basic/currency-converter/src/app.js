const headerElement = document.getElementById("header");
const dateNow = new Date().toLocaleDateString();
const url = `https://api.monobank.ua/bank/currency`;
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
console.log("currenciesRate fetch", currenciesRate);
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
buildCurrenceNow(headerElement);
async function GetExchangesRate() {
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