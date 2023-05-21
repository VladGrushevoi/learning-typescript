async function GetExchangesRate() {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Error! Status code ${response.status}`);
    }
    const currencyCodeA : number[] = currenciesData.map(i => i.Code)
    const result = (await response.json()) as ExchangeRate[]
    const fitlering = result.filter(er => er.currencyCodeB === 980 && currencyCodeA.includes(er.currencyCodeA))
    return fitlering
}

