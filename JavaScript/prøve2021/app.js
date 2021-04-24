const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const selectEl = document.getElementById("area");
const outputEl = document.getElementById("differential");
const info = document.getElementById("info");
const yearFromInput = document.getElementById("yearFrom");
const yearToInput = document.getElementById("yearTo");

const areas = []; //Liste med alle områdene

const yearNumbers = ['1950', '1960', '1975', '1990', '2000', '2015']; //Liste med alle årene

const drawDiagram = array => { //Funksjon som tegner søylediagram
    let textWidth = 200; //Bredde på teksten
    let barWidth = canvas.width - textWidth - 10; //Hvor store søylene skal være
    canvas.height = array.length * 30; //Setter høyden på canvaset ut ifra hvor mange søyler
    let max = 0; //En variabel som sier hvem av søylene som er lengst
    array.forEach(el => {
        if (el.value > max) max = el.value
    });
    ctx.font = "24px 'Century Gothic'"; //Fontstørrelse og type font
    ctx.textAlign = "end"; //Sier hvor texten skal alignes
    ctx.textBaseLine = "hanging"; //Sier hvordan teksten skal tegnes
    array.forEach(el => {
        let share = (el.value / max) * barWidth; //Hvor stor i forhold til max bredde
        ctx.fillStyle = "#323232"; //Font farge
        ctx.fillText(`${el.description} (${el.value})`, canvas.width - textWidth + 45, (30 * array.indexOf(el)) + 20); //Fyller description
        ctx.fillStyle = `hsl(${array.indexOf(el) * 30}, 100%, 70%)`; //Søylefarge
        ctx.fillRect(textWidth - 40, (30 * array.indexOf(el)) + 3, share, 24); //Fyller søyle
    });
}

const showValidYears = (array, notFirstTime) => { //Viser riktig årstall i forhold til NØTT oppgaven
    let temp = JSON.parse(JSON.stringify(array));
    if (!notFirstTime) {
        yearFromInput.innerHTML = "";
        yearToInput.innerHTML = "";
        for (let i = 0; i < temp.length; i++) {
            yearFromInput.innerHTML += `<option>${temp[i]}</option>`;
        }
    }
    yearToInput.innerHTML = "";
    temp.splice(0, yearFromInput.selectedIndex + 1);
    for (let i = 0; i < temp.length; i++) {
        yearToInput.innerHTML += `<option>${temp[i]}</option>`;
    }
}

const data = [{ //DATA som lett kan endres
        name: 'Jotunheimen',
        years: [6, 11, 18, 25, 29, 41]
    },
    {
        name: 'Rondane',
        years: [4, 7, 11, 15, 23, 30]
    },
    {
        name: 'Hardangervidda',
        years: [2, 8, 13, 20, 24, 30]
    }
]
data.forEach(area => areas.push(new Area(area))); //Lager nye områder som er objekter med klasse Area
areas.forEach(area => {
    selectEl.innerHTML += `<option>${area.name}</option>`; //Lager lista med tilgjengelige områder
});


selectEl.addEventListener("change", e => {
    areas[selectEl.selectedIndex].showData()
    areas[selectEl.selectedIndex].showGrowth();
}); //Hvis område endres blir ny data vist
yearFromInput.addEventListener("change", e => { //Sjekker for å oppdatere fra x år til y år
    showValidYears(yearNumbers, true);
    areas[selectEl.selectedIndex].showGrowth();
});
yearToInput.addEventListener("change", e => {
    areas[selectEl.selectedIndex].showGrowth();
});

showValidYears(yearNumbers); //I starten av programmet viser de riktige årene i input yearTo
areas[selectEl.selectedIndex].showData(); //Viser data i starten av programmet
areas[selectEl.selectedIndex].showGrowth(); //Viser økning i starten av programmet