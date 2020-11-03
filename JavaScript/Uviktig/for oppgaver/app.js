//Oppgave 3.13 && Oppgave 3.14
// let hash="";
// for(let i = 0; i<=50; i++){
// hash += "#";
// console.log(hash);
// }


//Oppgave 3.16
// for(let i = 99; i >= 0; i--){
// if(i!= 0){
//     console.log(i + " flasker med brus på hylla, " + i + " flasker med brus.");
//     console.log("Ta en ned og send den rundt, " + (i-1) +" flasker med brus på hylla");
//     }else{
//         console.log("Ingen flere flasker på hylla, ingen flere flasker igjen.");
//         console.log("Gå i butikken og kjøp noen flere, 99 flasker med brus på hylla");
//     }
// }

//Oppgave 3.17
// for(let i = 1; i<=100; i++){
//     if(i%3==0 && i%5== 0){
//         console.log("FizzBuzz");
//     }else if(i%3==0 && i%5!==0){
//         console.log("Fizz");
//     }else if(i%3!==0 && i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }

//Oppgave 3.19
// function rndWords(amount, minLen, maxLen){
// let alphabet ="abcdefghijklmnopqrstuvwxyz".split('')
// for(let i = 0; i<amount; i++){
//     let word ="";
//     let wordLen = Math.floor(Math.random() * (maxLen - minLen + 1) + minLen);
//     for(let i = 0; i<wordLen; i++){
//         let index = Math.floor(Math.random()*26);
//         word+=alphabet[index];
//         }
//     console.log(word);
// }
// }
// //Spør etter 10 ord, mellom 4 og 10 bokstaver.
// rndWords(10,4,10);