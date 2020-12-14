const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const days = document.querySelectorAll(".day");

let displayFulldate = document.getElementById("fulldate");
let date = new Date();

let xStart = 0;
let xEnd = canvas.width;

console.log(days[0])

const cNum = n => (n).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

displayFulldate.innerHTML = `${date}`;

setInterval(() => {
    date = new Date();

    for(day in days) {
        if(day+1 == date.getDay()) {
            const el = days[day].getBoundingClientRect();
            xStart = el.x - 8 ;
            xEnd = el.x - 8 + el.width;
        }
    }

    displayFulldate.innerHTML = `${date}`;
    const y = canvas.height/451 * ((date.getHours()-8)*60 + date.getMinutes());



    if(date.getHours() >= 8 && date.getHours() < 16) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath()
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.moveTo(xStart, y);
            ctx.lineTo(xEnd, y);
            ctx.stroke();
    }
}, 1000);