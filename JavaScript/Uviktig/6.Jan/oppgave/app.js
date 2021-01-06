let navnEl = document.getElementById("navn");
let alderEl = document.getElementById("alder");
let tableEl = document.getElementById("table");
let deleteEl = document.getElementById("delete");
let personer = [];

const sortByAge = (a, b) => a.alder - b.alder;

const pushTable = () => {
    if (!navnEl == "" || alderEl == "") {
        personer.push({
            navn: navnEl.value,
            alder: alderEl.value
        });
    }
    navnEl.value = "";
    alder.value = "",
        personer.sort(sortByAge);
    tableEl.innerHTML = "<tbody><th>Navn</th><th>Alder</th><th>Slett</th>";
    for (i in personer) {
        tableEl.innerHTML += `<tr><td>${personer[i].navn}</td><td>${personer[i].alder}</td><td><button id="button${i}">Delete</button></td></tr>`;
        document.getElementById(`button${i}`).addEventListener("click", () => {
            console.log(i)
            personer.splice(i, 1);
            pushTable();
        });
    }
    tableEl.innerHTML += "</tbody>"
}
document.getElementById("button").addEventListener("click", pushTable);