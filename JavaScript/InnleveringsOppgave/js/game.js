//HTML ELEMENTER
const levelEl = document.querySelectorAll(".level");
const highscoreEl = document.querySelector(".highscore");
const buttons = document.querySelectorAll(".button");
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#container");
const endScreen = document.querySelector("#endScreen");

//Skjuler spill og slutt vinduene
endScreen.style.display = "none";
gameScreen.style.display = "none";

//Deklarerer globale variabler
let sequence;
let guess;
let level;
let sequenceGoing;

const startGame = () => { //Starter spillet
    //Setter normalverdier
    gameScreen.style.display = "flex";
    startScreen.style.display = "none";
    endScreen.style.display = "none";
    sequence = [];
    guess = [];
    level = 0;
    sequenceGoing = true;
    newStep(); //Starter spillet
}

const newStep = () => { //Starter nytt nivå
    sequenceGoing = true; //Kan ikke klikke når sekvensen foregår
    let rnd = Math.floor(Math.random() * 9) + 1; //Velger en random rute

    if (sequence[sequence.length - 1] == rnd) { //Hvis man velger den siste ruten på nytt
        newStep(); //Start funksjonen igjen og velg et nytt tall rekursivt
        return //Slutt funksjonen
    }

    sequence.push(rnd); //Ellers legg den til i sekvensen

    level++; //Øker level
    levelEl.forEach(el => { //Displayer level
        el.innerHTML = level;
    });

    guess = []; //Resetter gjettesekvens for neste nivå

    for (let i = 0; i < sequence.length; i++) { //Animerer sekvensen
        document.querySelector(`#btn${sequence[i]}`).classList.remove("buttonAnimation");
        setTimeout(() => {
            document.querySelector(`#btn${sequence[i]}`).classList.add("buttonAnimation");
            setTimeout(() => {
                document.querySelector(`#btn${sequence[i]}`).classList.remove("buttonAnimation");
            }, 750);
            if(i == sequence.length-1) sequenceGoing = false; //Når man er på slutten av sekvensen kan man klikke igjen
        }, 500 * i + 500);
    }

    setTimeout(() => { //Venter til hele sekvensen er ferdig, og fjerner alle animasjoner
        for (let i = 0; i < sequence.length; i++) {
            document.querySelector(`#btn${sequence[i]}`).classList.remove("buttonAnimation");
        }
    }, 500 * sequence.length + 1000);
}

const gameOver = id => { //Slutter spillet
    document.querySelector(`#btn${id}`).classList.add("buttonAnimationFalse"); //Starter animasjonen
    setTimeout(() => { //Venter 0.5s og fjerner animasjonen
        document.querySelector(`#btn${id}`).classList.remove("buttonAnimationFalse");
        setTimeout(() => { //Venter deretter 0.5s til og går til sluttsiden
            gameScreen.style.display = "none";
            endScreen.style.display = "flex";
        }, 500);
    }, 500);

    if(!localStorage.getItem("highscore") || level > localStorage.getItem("highscore")) localStorage.setItem("highscore", level); //Setter highscore
    highscoreEl.innerHTML = localStorage.getItem("highscore"); //Displayer highscore
}

const compareArrays = (arr1, arr2) => {//Funksjon som sammenligner 2 arrays
    let result = true; //Antar at de er like
    for (let i = 0; i < arr1.length; i++) { //Looper gjennom arrayet
        if (arr1[i] != arr2[i]) result = false; //Hvis samme index i begge arrays ikke matcher er de ikke like og dermed er resultat false
    }
    return result; //Returnerer result
}

const target = id => { //Når man trykker på en rute
    if(sequenceGoing) return; //Hvis sekvensen fortsatt visesm, ignorer trykket
    if (guess.length < sequence.length) guess.push(id); //Så lenge antall gjett er mindre enn sekvenslengden legger man til gjettet rute
    if (guess.length == sequence.length) {
        if(compareArrays(guess, sequence)) newStep(); //Når man har gjettet like mange ruter som i sekvensen sjekkes det om det er riktig og sender videre
    }
    if(!compareArrays(guess, sequence)) gameOver(id); //Ellers er spillet over
}