const canvas = document.getElementById("canvas"); //Henter canvas
const ctx = canvas.getContext("2d"); //Henter canvas.context
const scale = 20; // Hvor store cellene er
//Henter HTML Elementer
const mineCountEl = document.getElementById("mineCount");
const timerEl = document.getElementById("timer");
const winScreenEl = document.getElementById("winScreen");
const winScreenTimeEl = document.getElementById("endTime")
const buttonEl = document.getElementById("Smiley");
//Definerer variabler (Endres i setup)
let mines;
let mineCount;
let time;
let board;
let timer;
let mouseDown;

//Henter images
const imgs = []
for(let i = 0; i < 9; i++){
    imgs[i] = document.getElementById(String(i))
}
const imgOpen = document.getElementById("open");
const imgMine = document.getElementById("mine");
const imgFlag = document.getElementById("flag");

//Sjekker om man trykker på startknappen og kjører setup
document.getElementById("button").addEventListener("click", setup);

//Kjører setup første gang man kjører koden
setup();