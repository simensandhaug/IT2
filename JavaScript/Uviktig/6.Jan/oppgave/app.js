let nameEl = document.getElementById("navn");
let ageEl = document.getElementById("alder")
let tableEl = document.getElementById("table");
let persons = [];

const sortByAge = (a, b) => a.alder - b.alder;

const deleteName = i => {
    persons.splice(i, 1);
    pushTable();
}

const pushTable = () => {
    if (!nameEl.value == "" && !ageEl.value == "") {
        persons.push({
            navn: nameEl.value,
            alder: ageEl.value
        });
    }
    nameEl.value = "";
    ageEl.value = "",
        persons.sort(sortByAge);
    tableEl.innerHTML = "<th>Navn</th><th>Alder</th><th>Delete</th>";
    for (i in persons) tableEl.innerHTML += `<tr><td>${persons[i].navn}</td><td>${persons[i].alder}</td><td><span id="button${i}" onclick="deleteName(${i})"><img src="trash.png"></span></td></tr>`;
}
document.getElementById("button").addEventListener("click", pushTable);