const yearEl = document.getElementById("year");
const drunk = document.getElementById("drunk");
const speed = document.getElementById("speed");
const output = document.getElementById("output");
const years = [{
        name: 2008,
        drunk: 8560,
        speed: 15909
    },
    {
        name: 2009,
        drunk: 8146,
        speed: 14197
    },
    {
        name: 2010,
        drunk: 8241,
        speed: 13276
    },
    {
        name: 2011,
        drunk: 8019,
        speed: 11158
    },
    {
        name: 2012,
        drunk: 9759,
        speed: 12264
    }
];

const printOutput = () => {
    let minYear;
    let min = years[0].drunk + years[0].speed;
    years.forEach(year => {
        if (year.drunk + year.speed < min) {
            min = year.drunk + year.speed;
            minYear = year.name;
        }
    });
    output.innerHTML = `Lowest amount of cases in: ${minYear}`;
}

years.forEach(year => {
    yearEl.innerHTML += `<option>${year.name}</option>`
});
document.getElementById("button").addEventListener("click", () => {
    if (drunk.value != ``) years[yearEl.selectedIndex].drunk = parseInt(drunk.value);
    if (drunk.value != ``) years[yearEl.selectedIndex].speed = parseInt(speed.value);
    drunk.value = ``;
    speed.value = ``;
});