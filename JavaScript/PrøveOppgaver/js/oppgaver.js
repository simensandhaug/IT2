//Oppgave 3

const hovedsteder = ['Madrid', 'Oslo', 'Stockholm', 'København', 'Helsinki'];
const land = ['Spania', 'Norge', 'Sverige', 'Danmark', 'Finnland']
const dropdown = document.getElementById("dropdown");
const outputEl = document.getElementById("output")

for(l in land) {
    dropdown.innerHTML+=` <option value="${land[l]}">${land[l]}</option>`
}

dropdown.addEventListener("change", () => {
    outputEl.innerHTML =`"Du valgte ${dropdown.value}, som har hovedstad ${hovedsteder[land.indexOf(dropdown.value)]}"`;
});

//-------------------------------------------------------------------------------------------------------------------------------

//Oppgave 4

