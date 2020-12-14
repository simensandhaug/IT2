//Oppgave 3

// const hovedsteder = ['Madrid', 'Oslo', 'Stockholm', 'København', 'Helsinki'];
// const land = ['Spania', 'Norge', 'Sverige', 'Danmark', 'Finnland']
// const dropdown = document.getElementById("dropdown");
// const outputEl = document.getElementById("output")

// for(l in land) {
//     dropdown.innerHTML+=` <option value="${land[l]}">${land[l]}</option>`
// }

// dropdown.addEventListener("change", () => {
//     outputEl.innerHTML =`Du valgte ${dropdown.value}, som har hovedstad ${hovedsteder[land.indexOf(dropdown.value)]}`;
// });

//-------------------------------------------------------------------------------------------------------------------------------

//Oppgave 5

// const output = document.getElementById("kuk");
// let tall = [];

// const generateNumbers = (num) => {
//     kuk.innerHTML = "";
//     for (let i = 0; i < num; i++) {
//         tall.push(Math.floor(Math.random() * 1) + 1);
//     }
//     tall.sort();
//     for (num in tall) {
//         kuk.innerHTML += `${tall[num]}, `;
//     }
// }

//----------------------------------------------------------------------------------------------------------------------------------------

//Oppgave 1

const gram = document.getElementById("gram");
const outputEl = document.getElementById("output");
const meats = document.getElementsByName("meat");
let selectedMeat;

document.getElementById("calculate").addEventListener("click", () => {
    let kg = gram.value / 1000;
    for(i in meats) if(meats[i].checked) selectedMeat = meats[i].id;
    if(selectedMeat == "gris") outputEl.innerHTML = `Du steker ${kg} kg med ${selectedMeat}, som tar ${Math.floor(50*kg/60)} timer og ${(50*kg)%60} minutter`;
    else if(selectedMeat == "storfe") outputEl.innerHTML = `Du steker ${kg} kg med ${selectedMeat}, som tar ${Math.floor(40*kg/60)} timer og ${(40*kg)%60} minutter`;
    else outputEl.innerHTML = `Du steker ${kg} kg med ${selectedMeat}, som tar ${Math.floor(35*kg/60)} timer og ${(35*kg)%60} minutter`;
});