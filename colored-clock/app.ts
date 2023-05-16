const bodyTag : HTMLBodyElement = document.getElementsByTagName("body")[0]
const clockDiv = document.getElementsByClassName("container-clock")[0] as HTMLElement


setInterval(() => {
    let timeNow = new Date().toTimeString().split(" ")[0]
    const timeNowSplit = timeNow.split(":");
    const hourDiff = (24 - parseInt(timeNowSplit[0])).toString();
    const minutesDiff = (60 - parseInt(timeNowSplit[1])).toString();
    const secondsDiff = (60 - parseInt(timeNowSplit[2])).toString();
    clockDiv.innerHTML = timeNow;
    clockDiv.style.color = "#" + hourDiff + minutesDiff + secondsDiff;
    let colorString : string = "#"+ timeNow.toString().replace(":", "").replace(":","");
    console.log(colorString);
    bodyTag.style.backgroundColor = colorString;
}, 1000)