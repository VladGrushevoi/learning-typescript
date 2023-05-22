const headerElement : HTMLElement = document.getElementById("header");
const left : HTMLElement = document.getElementById("left");
const right : HTMLElement = document.getElementById("right");
const reverseButton : HTMLButtonElement = document.getElementById("reverse-button") as HTMLButtonElement;
let currencySelector : HTMLSelectElement = document.getElementById("currency-selector") as HTMLSelectElement
let uahInput : HTMLInputElement = document.getElementById("input-uah") as HTMLInputElement
let currencyInput : HTMLInputElement = document.getElementById("input-currency") as HTMLInputElement

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

reverseButton.addEventListener('click', (e : MouseEvent) => {
    const leftTempHtml = left.innerHTML;
    left.innerHTML = right.innerHTML;
    right.innerHTML = leftTempHtml;

   
    uahInput  = document.getElementById("input-uah") as HTMLInputElement
    currencyInput = document.getElementById("input-currency") as HTMLInputElement
    currencySelector = document.getElementById("currency-selector") as HTMLSelectElement

    uahInput.addEventListener('change', async (e : Event) => {
        const valueUAH : number = parseInt(uahInput.value);
        const currencyCode = currencySelector.value;
        const currenciesRateData = await currenciesRate;
        const currencyRate : ExchangeRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode))
        currencyInput.value = (valueUAH / currencyRate.rateSell).toFixed(2).toString();
    })
    
    currencyInput.addEventListener('change', async (e : Event) => {
        const valueCurrency = parseInt(currencyInput.value)
        const currencyCode = currencySelector.value;
        const currenciesRateData = await currenciesRate;
        const currencyRate : ExchangeRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode))
        uahInput.value = (valueCurrency * currencyRate.rateSell).toFixed(2).toString();
    });
})

uahInput.addEventListener('change', async (e : Event) => {
    const valueUAH : number = parseInt(uahInput.value);
    const currencyCode = currencySelector.value;
    const currenciesRateData = await currenciesRate;
    const currencyRate : ExchangeRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode))
    currencyInput.value = (valueUAH / currencyRate.rateSell).toFixed(2).toString();
})

currencyInput.addEventListener('change', async (e : Event) => {
    const valueCurrency = parseInt(currencyInput.value)
    const currencyCode = currencySelector.value;
    const currenciesRateData = await currenciesRate;
    const currencyRate : ExchangeRate = currenciesRateData.find(item => item.currencyCodeA === parseInt(currencyCode))
    uahInput.value = (valueCurrency * currencyRate.rateSell).toString();
});


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

const buildSelectorOptions = (selectorElem : HTMLSelectElement) => {
    currenciesData.forEach(i => selectorElem.innerHTML += `<option value=${i.Code}>${i.ShortName}</option>`)
}

buildCurrenceNow(headerElement);
buildSelectorOptions(currencySelector)

