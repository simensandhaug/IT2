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

//Images
const imgOpen = document.getElementById("open");
const imgMine = document.getElementById("mine");
const imgFlag = document.getElementById("flag");

const img0 = document.getElementById("0");
const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
const img4 = document.getElementById("4");
const img5 = document.getElementById("5");
const img6 = document.getElementById("6");
const img7 = document.getElementById("7");
const img8 = document.getElementById("8");

document.getElementById("button").addEventListener("click", setup);

setup();