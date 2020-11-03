let rnd = Math.random()*101;
rnd = Math.floor(rnd);
let promptTekst;
let tries = 0;
let guess = Number(prompt("Gjett et tall mellom 0 og 100"));
tries++;
while(guess!==rnd){
    if(guess > rnd){
        promptTekst = "Gjett noe mindre!";
    } else if(guess < rnd){
        promptTekst = "Gjett noe større!";
    }
    guess = Number(prompt(promptTekst))
    tries++;
}
alert("Korrekt!" + " Det tok deg: " + tries + " forsøk!?")