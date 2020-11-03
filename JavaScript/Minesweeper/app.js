const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const mineCountEl = document.getElementById("mineCount");
const timerEl = document.getElementById("timer");
const winScreenEl = document.getElementById("winScreen");
const winScreenTimeEl = document.getElementById("endTime")
const buttonEl = document.getElementById("Smiley");
let mines;
let mineCount;
let time;
let board;
let timer;
let mouseDown;

//Images
const imgs = []
for(let i = 0; i < 9; i++){
    imgs[i] = document.getElementById(String(i))
}
const imgOpen = document.getElementById("open");
const imgMine = document.getElementById("mine");
const imgFlag = document.getElementById("flag");

document.getElementById("button").addEventListener("click", setup);

setup();