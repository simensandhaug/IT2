//HTML Elementer
const verdensdelinput = document.querySelector("#verdensdelinput");
const verdensdelresultater = document.querySelector("#verdensdelresultater");
const prosentresultater = document.querySelector("#prosenter");

//Array med objekter som inneholder land med (navn, gull, solv, bronse og verdensdel)
const land = [{
        navn: "Sør-Korea",
        gull: 5,
        solv: 8,
        bronse: 4,
        verdensdel: "Asia"
    },
    {
        navn: "Japan",
        gull: 1,
        solv: 4,
        bronse: 3,
        verdensdel: "Asia"
    }, {
        navn: "Sverige",
        gull: 4,
        solv: 5,
        bronse: 5,
        verdensdel: "Europa"
    }, {
        navn: "Norge",
        gull: 14,
        solv: 14,
        bronse: 11,
        verdensdel: "Europa"
    }, {
        navn: "Kina",
        gull: 1,
        solv: 6,
        bronse: 2,
        verdensdel: "Asia"
    },
    {
        navn: "Russland",
        gull: 2,
        solv: 6,
        bronse: 9,
        verdensdel: "Asia"
    },
    {
        navn: "Finland",
        gull: 1,
        solv: 1,
        bronse: 4,
        verdensdel: "Europa"
    },
    {
        navn: "Østerrike",
        gull: 5,
        solv: 3,
        bronse: 6,
        verdensdel: "Europa"
    },
    {
        navn: "USA",
        gull: 9,
        solv: 8,
        bronse: 6,
        verdensdel: "Nord-Amerika"
    },
    {
        navn: "Hviterussland",
        gull: 2,
        solv: 1,
        bronse: 0,
        verdensdel: "Europa"
    },
    {
        navn: "Canada",
        gull: 11,
        solv: 8,
        bronse: 10,
        verdensdel: "Nord-Amerika"
    },
    {
        navn: "Storbritannia",
        gull: 1,
        solv: 0,
        bronse: 4,
        verdensdel: "Europa"
    },
    {
        navn: "Sveits",
        gull: 5,
        solv: 6,
        bronse: 4,
        verdensdel: "Europa"
    },
    {
        navn: "Slovakia",
        gull: 1,
        solv: 2,
        bronse: 0,
        verdensdel: "Europa"
    },
    {
        navn: "Frankrike",
        gull: 5,
        solv: 4,
        bronse: 6,
        verdensdel: "Europa"
    },
    {
        navn: "Tsjekkia",
        gull: 2,
        solv: 2,
        bronse: 3,
        verdensdel: "Europa"
    },
    {
        navn: "Tyskland",
        gull: 14,
        solv: 10,
        bronse: 7,
        verdensdel: "Europa"
    },
    {
        navn: "Italia",
        gull: 3,
        solv: 2,
        bronse: 5,
        verdensdel: "Europa"
    },
    {
        navn: "Nederland",
        gull: 8,
        solv: 6,
        bronse: 6,
        verdensdel: "Europa"
    },
    {
        navn: "Polen",
        gull: 1,
        solv: 0,
        bronse: 1,
        verdensdel: "Europa"
    }
];

//Array med alle verdensdelene
const verdensdeler = ["Asia", "Europa", "Nord-Amerika"];

//Legger til alle verdensdelene som er tilgjengelige
for (let i = 0; i < verdensdeler.length; i++) {
    verdensdelinput.innerHTML += `<option value="${verdensdeler[i]}">${verdensdeler[i]}</option>`;
}

//Deklarerer variabler for totalen av alle medaljer (trengs for % regningen senere)
let totalMedaljer = 0;
let totalGull = 0;
let totalSolv = 0;
let totalBronse = 0;
for (let i = 0; i < land.length; i++) {
    totalMedaljer += land[i].gull;
    totalMedaljer += land[i].solv;
    totalMedaljer += land[i].bronse;

    totalGull += land[i].gull;
    totalSolv += land[i].solv;
    totalBronse += land[i].bronse;
}

const handleShowcase = () => {
    verdensdelresultater.innerHTML = ""; //Klargjører outputen
    prosentresultater.innerHTML = ""; //Klargjører outputen
    const i = verdensdelinput.selectedIndex; //Indexen til den valgte verdensdelen
    const verdensdel = verdensdeler[i]; //Hvilken verdensdel som er valgt

    //Deklarerer total sum av gull sølv og bronse i alle landene i verdensdelen
    let sumGull = 0;
    let sumSolv = 0;
    let sumBronse = 0;

    for (let i = 0; i < land.length; i++) { //Looper gjennom og legger til gull, solv og bronse i sine respektive variabler
        if (land[i].verdensdel == verdensdel) {
            sumGull += land[i].gull;
            sumSolv += land[i].solv;
            sumBronse += land[i].bronse;
        }
    }
    //Outputer resultater
    verdensdelresultater.innerHTML = `<p>Verdensdelen <b>${verdensdel}</b> tok til sammen ${sumGull} gull, ${sumSolv} sølv og ${sumBronse} bronse.</p>`;
    verdensdelresultater.innerHTML += `<table><tr><th>Verdensdel</th><th>Gull</th><th>Sølv</th><th>Bronse</th></tr><tr><td>${verdensdel}</td><td>${sumGull}</td><td>${sumSolv}</td><td>${sumBronse}</td></tr></table>`;
    prosentresultater.innerHTML += `<p>Verdensdelen <b>${verdensdel}</b> tok ${(sumGull/totalGull * 100).toFixed(1)}% av alle gullmedaljene, ${(sumSolv/totalSolv * 100).toFixed(1)}% av alle sølvmedaljene, ${(sumBronse/totalBronse * 100).toFixed(1)}% av alle bronsemedaljene og ${((sumGull+sumSolv+sumBronse)/totalMedaljer * 100).toFixed(1)}% av alle medaljene totalt</p>`;
    prosentresultater.innerHTML += `<table><tr><th>Verdensdel</th><th>Gull %</th><th>Sølv %</th><th>Bronse %</th><th>Total %</th></tr><tr><td>${verdensdel}</td><td>${(sumGull/totalGull * 100).toFixed(1)}%</td><td>${(sumSolv/totalSolv * 100).toFixed(1)}%</td><td>${(sumBronse/totalBronse * 100).toFixed(1)}%</td><td>${((sumGull+sumSolv+sumBronse)/totalMedaljer * 100).toFixed(1)}%</td></tr></table>`;
}


verdensdelinput.addEventListener("change", handleShowcase); //Lytter til når bruker endrer på input

handleShowcase(); //Engangstilfelle som gjør at det vises noe når programmet kjøres