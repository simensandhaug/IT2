let white = document.getElementById("white");
let black = document.getElementById("black");
let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let lime = document.getElementById("lime");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let yellow = document.getElementById("yellow");
let cyan = document.getElementById("cyan");
let orange = document.getElementById("orange");
let brown = document.getElementById("brown");
let select = document.getElementById("select");
let selectedPlayers = [];

const splice = (color) => {
    selectedPlayers.splice(selectedPlayers.indexOf(color), 1)
}

select.addEventListener("click", () => {
    if(white.checked && !selectedPlayers.includes("white")) selectedPlayers.push("white");
    else if(!white.checked && selectedPlayers.includes("white"))splice("white");
    if(black.checked && !selectedPlayers.includes("black")) selectedPlayers.push("black");
    else if(!black.checked && selectedPlayers.includes("black"))splice("black");
    if(red.checked && !selectedPlayers.includes("red")) selectedPlayers.push("red");
    else if(!red.checked && selectedPlayers.includes("red"))splice("red");
    if(blue.checked && !selectedPlayers.includes("blue")) selectedPlayers.push("blue");
    else if(!blue.checked && selectedPlayers.includes("blue"))splice("blue");
    if(cyan.checked && !selectedPlayers.includes("cyan")) selectedPlayers.push("cyan");
    else if(!cyan.checked && selectedPlayers.includes("cyan"))splice("cyan");
    if(yellow.checked && !selectedPlayers.includes("yellow")) selectedPlayers.push("yellow");
    else if(!yellow.checked && selectedPlayers.includes("yellow"))splice("yellow");
    if(pink.checked && !selectedPlayers.includes("pink")) selectedPlayers.push("pink");
    else if(!pink.checked && selectedPlayers.includes("pink"))splice("pink");
    if(purple.checked && !selectedPlayers.includes("purple")) selectedPlayers.push("purple");
    else if(!purple.checked && selectedPlayers.includes("purple"))splice("purple");
    if(orange.checked && !selectedPlayers.includes("orange")) selectedPlayers.push("orange");
    else if(!orange.checked && selectedPlayers.includes("orange"))splice("orange");
    if(brown.checked && !selectedPlayers.includes("brown")) selectedPlayers.push("brown");
    else if(!brown.checked && selectedPlayers.includes("brown"))splice("brown");
    if(green.checked && !selectedPlayers.includes("green")) selectedPlayers.push("green");
    else if(!green.checked && selectedPlayers.includes("green"))splice("green");
    if(lime.checked && !selectedPlayers.includes("lime")) selectedPlayers.push("lime");
    else if(!lime.checked && selectedPlayers.includes("lime"))splice("lime");
    console.log(selectedPlayers)
});