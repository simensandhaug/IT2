//HTML Elementer
const landinput = document.querySelector("#landinput");
const outputDiv = document.querySelector("#info");
const chart = document.querySelector("#chart");

//Array med objekter som inneholder land med (navn, gull, solv, bronse)
const land = [{
        navn: "Sør-Korea",
        gull: 5,
        solv: 8,
        bronse: 4
    },
    {
        navn: "Japan",
        gull: 1,
        solv: 4,
        bronse: 3
    }, {
        navn: "Sverige",
        gull: 4,
        solv: 5,
        bronse: 5
    }, {
        navn: "Norge",
        gull: 14,
        solv: 14,
        bronse: 11
    }, {
        navn: "Kina",
        gull: 1,
        solv: 6,
        bronse: 2
    }
];

//Legger til alle mulige land som kan velges
for (let i = 0; i < land.length; i++) {
    landinput.innerHTML += `<option value="${land[i].navn}">${land[i].navn}</option>`;
}



///////// Soylediagram

const finnMaks = arr => { //Funksjon som tar inn et array og returnerer den høyeste verdien i arrayet
    var maks = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maks) {
            maks = arr[i];
        }
    }
    return maks;
}

const tegnStolper = (arr, arrNavn)  => { //Funksjon som tegner søylediagrammet med riktig verdier
    var maks = finnMaks(arr); //Henter høyeste verdi
    for (let i = 0; i < arr.length; i++) {
        var prosent = arr[i] / maks * 100; //Antall prosent i forhold til den høyeste verdien
        chart.innerHTML += "<div style='height:" + prosent + "%' >" + arrNavn[i] + "(" + arr[i] + ")" + "</div>"; //Setter høyde og setter inn verdier i søyla.
    }
}

const handleShowcase = () => { //Funksjon som håndterer visningen av informasjon
    outputDiv.innerHTML = ""; //Klargjør output
    chart.innerHTML = ""; //Klargjør søylediagram
    const i = landinput.selectedIndex; //Den valgte indexen
    // console.log(land[i].navn);

    //Deklarerer variabler
    const navn = land[i].navn;
    const gull = land[i].gull;
    const solv = land[i].solv;
    const bronse = land[i].bronse;
    const total = gull + solv + bronse;

    //Outputter en tabell med all informasjonen
    outputDiv.innerHTML += `<table><tr><th>Land</th><th>Gull</th><th>Solv</th><th>Bronse</th><th>Total</th></tr><tr><td>${navn}</td><td>${gull}</td><td>${solv}</td><td>${bronse}</td><td>${total}</td></tr></table>`;

    //Tegner søylediagrammet
    tegnStolper([gull, solv, bronse], ["Gull", "Sølv", "Bronse"]);
}

landinput.addEventListener("change", handleShowcase); //Lytter til når bruker gir input

handleShowcase(); //Når programmet starter vises det informasjon om landet i første plass i listen slik at det ikke blir surr