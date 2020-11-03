const frokostPris = 200;
const boSommarland = 300;
const klatrepark = 250;
const fruktgard = 200;
const telemarkkanalen = 800;

let gjesterEl = document.querySelector("#antallGjester");
let frokostJaEl = document.querySelector("#frokostJa");
let frokostNeiEl = document.querySelector("#frokostNei");
let dagspassBoEl = document.querySelector("#dagspassBo");
let dagspassHoytEl = document.querySelector("#dagspassHoyt");
let omvisningEl = document.querySelector("#omvisning");
let dagsturTelemarkEl = document.querySelector("#dagsturTelemark");
let totalPrisEl = document.querySelector("#totalPris")

gjesterEl.addEventListener("change", oppdaterTotalPris);
frokostJaEl.addEventListener("change", oppdaterTotalPris);
frokostNeiEl.addEventListener("change", oppdaterTotalPris);
dagsturTelemarkEl.addEventListener("change", oppdaterTotalPris);
omvisningEl.addEventListener("change", oppdaterTotalPris);
dagspassHoytEl.addEventListener("change", oppdaterTotalPris);
dagspassBoEl.addEventListener("change", oppdaterTotalPris);


function oppdaterTotalPris() {
    let totalpris = 0;
    let antallGjester = Number(gjesterEl.value);

    if(frokostJaEl.checked) totalpris += frokostPris;
    if(dagspassBoEl.checked) totalpris += boSommarland;
    if(dagspassHoytEl.checked) totalpris += klatrepark;
    if(omvisningEl.checked) totalpris += fruktgard;
    if(dagsturTelemarkEl.checked) totalpris += telemarkkanalen;


    totalpris *= antallGjester;
    
    totalPrisEl.innerHTML = "Totalprisen er: " + totalpris + " kroner";
    console.log(gjesterEl.value)
}