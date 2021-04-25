const barChartEl = document.querySelector("#barchart");
const HEIGHT_CONSTANT = 10;

const outputWinner = document.querySelector("#winner");
const outputDiff = document.querySelector("#differance");

const parties = {
    R: 3.7,
    SV: 5.0,
    AP: 23.0,
    SP: 4.2,
    MDG: 3.8,
    KRF: 2.8,
    V: 6.7,
    H: 28.2,
    FRP: 15.6,
    PIR: 4.3
};


const B = parties.H + parties.FRP + parties.KRF + parties.V;
const RG = parties.AP + parties.SV + parties.SP;

const BEL = document.querySelector("#B");
const RGEL = document.querySelector("#RG");

BEL.innerHTML = `B: ${B}%`;
RGEL.innerHTML = `RG: ${RG}%`;
console.log(B * HEIGHT_CONSTANT)
BEL.style.height = `${B * HEIGHT_CONSTANT}px`;
RGEL.style.height = `${RG * HEIGHT_CONSTANT}px`;

if (B > RG) {
    outputWinner.innerHTML = `Borgerlig Regjering!`;
    outputDiff.innerHTML = `Differanse: ${(B-RG).toFixed(2)}%`;
}

if (RG > B) {
    outputWinner.innerHTML = `Rødgrønn Regjering!`;
    outputDiff.innerHTML = `Differanse: ${(RG-B).toFixed(2)}%`;
}