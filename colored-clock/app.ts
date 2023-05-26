const bodyTag : HTMLBodyElement = document.getElementsByTagName("body")[0]
const clockDiv = document.getElementsByClassName("container-clock")[0] as HTMLElement

const hexNumbers = ["A", "B", "C", "D", "E", "F"];

setInterval(() => {
    const dayName : string = new Date().toLocaleString("en-US", {weekday: "long"});
    const hexLettersFromDay : string[] = dayName.split("").map(char => {
        if(hexNumbers.indexOf(char.toUpperCase()) > -1){
            return char.toUpperCase();
        }
    }).filter(item => item);


    let timeNow = new Date().toTimeString().split(" ")[0]
    const timeNowSplit = timeNow.split(":");
    const hourDiff = (99 - parseInt(timeNowSplit[0])).toString();
    const minutesDiff = (99 - parseInt(timeNowSplit[1])).toString();
    const secondsDiff = (99 - parseInt(timeNowSplit[2])).toString();
    clockDiv.innerHTML = timeNow;
    clockDiv.style.color = "#" + hourDiff + minutesDiff + secondsDiff;
    let colorString : string = "#"+ timeNow.toString().replace(":", "").replace(":","");
    let colorStringSplit = colorString.split("");
    switch(hexLettersFromDay.length){
        case 0:
            break;
        case 1:
            colorStringSplit[1] = hexLettersFromDay[0];
            colorString = colorStringSplit.join("");
            break;
        case 2:
            colorStringSplit[1] = hexLettersFromDay[0];
            colorStringSplit[3] = hexLettersFromDay[1];
            colorString = colorStringSplit.join("");
            break;
        case 3:
            colorStringSplit[1] = hexLettersFromDay[0];
            colorStringSplit[3] = hexLettersFromDay[1];
            colorStringSplit[5] = hexLettersFromDay[2];
            colorString = colorStringSplit.join("");
    }
    console.log(colorString);
    bodyTag.style.backgroundColor = colorString;
}, 1000)