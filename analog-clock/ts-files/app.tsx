const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes")
const secondes = document.getElementById("secondes")

function SetDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondes.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minutes.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hours.style.transform = `rotate(${hourDegrees}deg)`;
}

SetDate();
setInterval(SetDate, 1000);