const sequence = [];
let guess = [];

let level = 0;

const levelEl = document.querySelectorAll(".level")

const endScreen = document.querySelector("#endScreen");
endScreen.style.display = "none";

const gameScreen = document.querySelector("#container");

const newStep = () => {
    let rnd = Math.floor(Math.random() * 9) + 1;

    if(sequence[sequence.length-1] == rnd) {
        newStep();
        return
    }

    sequence.push(rnd);

    level++;
    levelEl.forEach(el => {
        el.innerHTML = level;
    });

    guess = [];

    for (let i = 0; i < sequence.length; i++) {
        document.querySelector(`#btn${sequence[i]}`).classList.remove("buttonAnimation");
        setTimeout(() => {
            document.querySelector(`#btn${sequence[i]}`).classList.add("buttonAnimation");
        }, 550 * i + 500);
    }

    setTimeout(() => {
        for (let i = 0; i < sequence.length; i++) {
            document.querySelector(`#btn${sequence[i]}`).classList.remove("buttonAnimation");
        }
    }, 500 * sequence.length + 1000);
    console.log(sequence)
}

const gameOver = id => {
    document.querySelector(`#btn${id}`).classList.add("buttonAnimationFalse");
    setTimeout(() => {
        document.querySelector(`#btn${id}`).classList.remove("buttonAnimationFalse");
    }, 500);
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";
}

const compare = (arr1, arr2) => {
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) result = false;
    }
    return result;
}

const target = id => {
    if (guess.length < sequence.length) guess.push(id);
    if (guess.length == sequence.length) {
        if (compare(guess, sequence)) newStep();
    }
    if (guess[guess.length - 1] != sequence[guess.length - 1]) gameOver(id);
}

newStep();