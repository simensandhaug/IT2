const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let lowest = arr[0];
let highest = arr[0];
//B
arr.forEach(el => console.log(el));
//C
arr.forEach(el => sum += el);
console.log(`Sum: ${sum}`)
//D
console.log(`Gjennomsnitt: ${sum/arr.length}`); 
//E
arr.forEach(el => {if (el < lowest) lowest = el});
arr.forEach(el => {if (el > highest) highest = el});
console.log(`Minst: ${lowest}\nStørst: ${highest}`);
//F
const gjennomsnitt = arr => {
    let sum = 0;
    arr.forEach(el => sum += el);
    return `Gjennomsnitt: ${sum/arr.length}`;
}
console.log(`${gjennomsnitt(arr)}\n`);
//Ekstra
let ekstra1 = new Array;
for (let i = 0; i < 100; i++) ekstra1.push(Math.floor(Math.random() * 100));
console.log(`Et array med 100 tall fra 0-100:\n${ekstra1}`);
//Ekstra 2
let ekstra2 = new Array;
while (ekstra2.length < 20) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (ekstra2.indexOf(r) === -1) ekstra2.push(r);
}
console.log(`\nEt array med 20 unike tall fra 0-100\n${ekstra2}`);