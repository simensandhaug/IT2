//Oppgave 1
const oppg1Output = document.getElementById("output1"); //Henter output
let totalpris; //Deklarer totalpris

const getRingePris = tid => tid * 9.99; //Returnerer ringepris
const getMmsPris = antall => antall * 5; //Returnerer mmsPris
const getSmsPris = antall => antall * 1.99; //Returnerer smsPris
const getSluttSetning = () => {
    if (totalpris < 500) return "Dette er en lav sum";
    else if (totalpris > 1000) return "Kostnaden er veldig høy. Bruk heller e-post eller annen kommunikasjon som ikke koster";
    else return "Kostnaden begynner å bli høy";
} //Returnerer sluttsetning

if(document.getElementById("button1") != null) document.getElementById("button1").addEventListener("click", () => {//Måtte sjekke om HTML-elementet ikke var null fordi det er ett JS-dokument til 3 html filer
    let ringeminutter = document.getElementById("ringeminutter").value; //Henter ringeminutter-input
    let antallmms = document.getElementById("mms").value; //Henter mms-input
    let antallsms = document.getElementById("sms").value; //Henter sms-input

    totalpris = getRingePris(ringeminutter) + getMmsPris(antallmms) + getSmsPris(antallsms); //Finner totalpris
    oppg1Output.innerHTML = //Skriver ut output til websiden
    `
    Ringepris: ${getRingePris(ringeminutter)}kr </br>
    MMSPris: ${getMmsPris(antallmms)}kr </br>
    SMSPris: ${getSmsPris(antallsms)}kr </br>
    Totalpris: ${totalpris.toFixed(2)}kr </br>
    ${getSluttSetning()}
    `
});

//Oppgave 2
const dager = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag']; //Array fra oppgave
const oppg2Output = document.getElementById("output2"); //Henter output

if(document.getElementById("button2") != null) document.getElementById("button2").addEventListener("click", () => {//Måtte sjekke om HTML-elementet ikke var null fordi det er ett JS-dokument til 3 html filer
    let dagNr = document.getElementById("dagNr").value; //Henter nummer på dagen
    if(dager[dagNr-1]) oppg2Output.innerHTML = `${dager[dagNr-1]}`; //Hvis nummeret er en av dagene, skriv ut dagen
    else oppg2Output.innerHTML = "Dette er ikke en gyldig ukedag"; //Ellers ikke gyldig dag
});

//Oppgave 3
let ord1 = ["Bil", "Tog", "Katt", "Hund", "Ild", "Vann"]; //Array fra oppgave
let ord2 = ["Hund", "Kanin", "Båt", "Bok", "Jord", "Bil"]; //Array fra oppgave

const skrivUtArrayer = (arr1, arr2) => { //Funksjon som tar inn arr1 og arr2 som parametere
    for(el in arr1) { //For hvert element i arr1
        if(arr2.includes(arr1[el])) console.log(`Ordet: ${arr1[el]} fantes i begge arrayene`); //Hvis elementet er i begge arrayene skriv dette ut
        else console.log(`Ordet: ${arr1[el]} fantes kun i den ene arrayen`); //Ellers skriv at det kun er i en
    }
    for(el in arr2) if(!arr1.includes(arr2[el])) console.log(`Ordet: ${arr2[el]} fantes kun i den ene arrayen`); //Sjekker arr2 for ord som kun er i en av de og skriver også disse ut
}
skrivUtArrayer(ord1, ord2); //Caller funksjonen
