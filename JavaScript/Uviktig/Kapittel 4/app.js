// console.log("Oppgave 4.2")

// function tilfeldigHilsen(){
//     const arr = ["Hei", "Hallo", "God dag"]
//     let rnd = Math.floor(Math.random()*3);
//     console.log(arr[rnd]);
// }

// tilfeldigHilsen();

// console.log("Oppgave 4.5")

// function sirkelAreal(radius, enhet){
//     let areal = radius * Math.PI;
//     console.log("Arealet av en sirkel med radius " + radius + enhet + " er " + areal.toFixed(2) + enhet);
// }
// sirkelAreal(2, "m")

// console.log("Oppgave 4.6")

// function tegnKatt(){
//     console.log('"=^.^="');
// }
// tegnKatt()

// console.log("Oppgave 4.7")

// function tegnKatter(times) {
//     for(let i = 0; i<times; i++) {
//         console.log('"=^.^="');
//     }
// }
// tegnKatter(3);

// console.log("Oppgave 4.8")

// function navneskilt(navn){
//     var lengde = navn.length
//     var border = ""
//     for(let i = 0; i<lengde + 4; i++) {
//         border+="*"
//     }
//     console.log(border);
//     console.log("* " + navn + " *");
//     console.log(border);
// }
// navneskilt("Lise");

// console.log("Oppgave 4.10");

// function terningKast(){
//     terning1 = Math.floor(Math.random()*6)+1;
//     terning2 = Math.floor(Math.random()*6)+1;
//     if(terning1 == terning2){
//         console.log("Par av " + terning1);
//     }else if(terning1 + terning2 == 7){
//         console.log("Summen er lik " + 7 + " { " + terning1 + ", " + terning2 + " }");
//     }else{
//         console.log("Ingen par eller sum 7 D:");
//     }
// }
// terningKast()

// console.log("Oppgave 4.11");

// function terningTreSider(){
//     return Math.floor(Math.random()*3) + 1;
// }
// console.log(terningTreSider());

// console.log("Oppgave 4.12");

// while(true){
//     var terning1 = terningTreSider();
//     var terning2 = terningTreSider();
//     var terning3 = terningTreSider();
//     var sum = terning1 + terning2 + terning3;
//     console.log("Summen er: " + sum);
//     if(terning1 === terning2 && terning1 === terning3){
//         console.log("Tre like");
//         break;
//     }
// }

// console.log("Oppgave 4.13");

// function yatzy(n) {
//     for(let i=0; i<n; i++){
//         let result = Math.floor(Math.random()*6)+1;
//         console.log(result);
//     }
// }
// yatzy(5);

// console.log("Oppgave 4.16");

// function tilfeldigTall(x, y){ // Lager funksjon tilfeldigTall som tar inn parameterene x og y
//     console.log(Math.floor(Math.random()*y)+x); // Antar at y>x og at tallet skal være element i [x, y]
// }
// tilfeldigTall(1, 8); // Kaller funksjonen med x = 1, y = 8





