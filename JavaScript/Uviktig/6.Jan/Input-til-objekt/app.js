let navnEl = document.getElementById("navn");
let alderEl = document.getElementById("alder");
let person = [];

document.getElementById("button").addEventListener("click", () => {
    person.push({
        fornavn: navnEl.value.split(" ")[0],
        etternavn: navnEl.value.split(" ")[1],
        alder: alderEl.value
    });
    console.log(person);
});