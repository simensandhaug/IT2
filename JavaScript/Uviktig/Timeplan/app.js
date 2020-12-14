const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let displayDate = document.getElementById("displayDate");
let displayTime = document.getElementById("displayTime");
let displayFulldate = document.getElementById("fulldate");
let date = new Date();

const cNum = n => (n).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

displayDate.innerHTML = `${cNum(date.getDate())}.${cNum(date.getMonth())}.${date.getFullYear()}`;
displayTime.innerHTML = `${cNum(date.getHours())}.${cNum(date.getMinutes())}`;
displayFulldate.innerHTML = `${date}`;

setInterval(() => {
    date = new Date();

    displayFulldate.innerHTML = `${date}`;
    displayDate.innerHTML = `${cNum(date.getDate())}.${cNum(date.getMonth())}.${date.getFullYear()}<br>`;
    displayTime.innerHTML = `${cNum(date.getHours())}.${cNum(date.getMinutes())}`;
    const y = canvas.height/451 * ((date.getHours()-8)*60 + date.getMinutes());
    console.log(canvas.height)
    if(date.getHours() >= 8 && date.getHours() < 16) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath()
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
    }
}, 1000);