const headerElement : HTMLElement = document.getElementById("header");
const dateNow = new Date().toLocaleDateString()
const url : string = `https://api.monobank.ua/bank/currency`;
const currenciesData : Currency[] = [
    {
        Code: 840,
        ShortName: 'USD'
    },
    {
        Code: 978,
        ShortName: 'EURO'
    }
]
let currenciesRate = GetExchangesRate()

console.log("currenciesRate fetch", currenciesRate)

const buildCurrenceNow = (element : HTMLElement) : string => {
    let html : string = ``;
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
            })
        })
    return html;
}

buildCurrenceNow(headerElement);

