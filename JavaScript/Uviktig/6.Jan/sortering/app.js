let arrTall = [4, 12, 9, 21];
const sortNumber = (a, b) => a - b;
const sortNames = (a, b) => {
    if (a.etternavn > b.etternavn) return 1;
    else if (a.etternavn < b.etternavn) return -1;
    else return 0;
}

arrTall.sort(sortNumber);
console.log(arrTall)
let person = [{
    fornavn: "Simen",
    etternavn: "Sandhaug"
}, {
    fornavn: "Henry",
    etternavn: "Hansen"
}];

person.sort(sortNames);
console.log(person)