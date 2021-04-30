const passwordEl = document.querySelector("#password");
const loginBTN = document.querySelector("#loginbtn");
const loginPage = document.querySelector("#loginpage");
const votingPage = document.querySelector("#votingpage");
const passwordError = document.querySelector("#passworderror");
const partySelect = document.querySelector("#partyselect");
const confirmation = document.querySelector("#confirmationoutput")
const confirmBTN = document.querySelector("#confirm");
const confirmDiv = document.querySelector("#confirmdiv")
const showTablesBTN = document.querySelector("#count");
const tablePage = document.querySelector("#tablepage");
const tableOutput = document.querySelector("#tableoutput")

votingPage.style.display = "none";
tablePage.style.display = "none";

const passwordTable = ["Passord001", "Passord002", "Passord003", "Passord004", "Passord005"];

const parties = [{
        name: "Rødt",
        votes: 0,
        previousPercent: 3.7,
    },
    {
        name: "SV",
        votes: 0,
        previousPercent: 5.0,
    },
    {
        name: "AP",
        votes: 0,
        previousPercent: 23.0,
    },
    {
        name: "SP",
        votes: 0,
        previousPercent: 4.2,
    },
    {
        name: "MDG",
        votes: 0,
        previousPercent: 3.8,
    },
    {
        name: "KrF",
        votes: 0,
        previousPercent: 2.8,
    },
    {
        name: "V",
        votes: 0,
        previousPercent: 6.7,
    },
    {
        name: "H",
        votes: 0,
        previousPercent: 28.2,
    },
    {
        name: "FrP",
        votes: 0,
        previousPercent: 15.6,
    },
    {
        name: "PIR",
        votes: 0,
        previousPercent: 4.3,
    }
]

for (let i = 0; i < parties.length; i++) partySelect.innerHTML += `<option value="${i}">${parties[i].name}</option>`;

const loginSuccess = passwordIndex => {
    loginPage.style.display = "none";
    passwordTable.splice(passwordIndex, 1);
    votingPage.style.display = "block";
    confirmation.innerHTML = "";
    confirmDiv.style.display = "block";
}

const loginFail = () => {
    passwordEl.value = "";
    passwordError.innerHTML = "Passord finnes ikke!";
    setTimeout(() => {
        passwordError.innerHTML = "";
    }, 5000);
}

const handlePassword = () => {
    for (let i = 0; i < passwordTable.length; i++) {
        if (passwordEl.value == passwordTable[i]) return loginSuccess(i);
    }
    return loginFail();
}

const handleVoting = () => confirmation.innerHTML = `Vil du stemme ${parties[partySelect.selectedIndex].name}?`;

const confirmChoice = () => {
    parties[partySelect.selectedIndex].votes++;
    confirmDiv.style.display = "block";
    confirmation.innerHTML = `Du har nå stemt ${parties[partySelect.selectedIndex].name}, slutter programmet...`;
    setTimeout(() => {
        votingPage.style.display = "none";
        loginPage.style.display = "block";
    }, 3000);
}
const showTables = () => {
    loginPage.style.display = "none";
    tablePage.style.display = "block";

    let total = 0;

    for (let i = 0; i < parties.length; i++) total += parties[i].votes;

    for (let i = 0; i < parties.length; i++) {
        const name = parties[i].name;
        const percent = parties[i].votes == 0 || total == 0 ? 0 : ((parties[i].votes / total) * 100).toFixed(1);
        const previous = parties[i].previousPercent;
        tableOutput.innerHTML += `<tr><td>${name}</td><td>${percent}%</td><td>${previous}%</td><td>${percent-previous}%</td></tr>`;
    }
}

loginBTN.addEventListener("click", handlePassword);
partySelect.addEventListener("change", handleVoting);
confirmBTN.addEventListener("click", confirmChoice);
showTablesBTN.addEventListener("click", showTables);