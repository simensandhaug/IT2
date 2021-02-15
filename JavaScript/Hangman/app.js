const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const input = document.getElementById("letterInput");

//Variables
let hangman;

//Randomword
fetch('http://random-word-api.herokuapp.com//word?number=10')
    .then(res => res.json())
    .then(data => newGame(data))

//Classes
class Hangman {
    constructor(words) {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guesses = 0;
        this.amountGuessed = 0;
        this.guessList = [];
    }
    win() {
        setTimeout(() => {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.font = '60px Arial';
            ctx.fillText("You Win!", c.width / 2 - 130, c.height / 2)
            setTimeout(() => {
                location.reload();
            }, 5000);
        }, 500);
    }
    lose() {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.font = '60px Arial';
        ctx.fillText("You Lose!", c.width / 2 - 145, c.height / 2);
        ctx.fillText(this.word, c.width / 2 - 145, c.height / 2 + 100);
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
    addToGuessed(guess) {
        if (!this.guessList.includes(guess)) {
            this.guessList.push(guess);
            ctx.clearRect(0, c.height, 200, c.height - 100);
            ctx.font = '30px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(this.guessList.join(" "), 20, c.height - 20)
        }
    }
    drawLetterOnPos(i) {
        this.amountGuessed++;
        ctx.beginPath();
        ctx.font = '45px Arial'
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.word[i], (c.width / this.word.length * i + 25) + (((c.width / this.word.length * i + c.width / this.word.length - 40)) - (c.width / this.word.length * i + 25)) / 2 - 15, c.height / 2 - 358);
        ctx.closePath();
    }
    showLetter(n) {
        for (let i = 0; i < this.word.length; i++) {
            if (this.word.split("")[i].toLowerCase() == n) hangman.drawLetterOnPos(i);
        }
    }
    draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        for (let i = 0; i < this.word.length; i++) {
            ctx.beginPath();
            ctx.moveTo(c.width / this.word.length * i + 25, c.height / 2 - 350);
            ctx.lineTo(c.width / this.word.length * i + c.width / this.word.length - 40, c.height / 2 - 350);
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
            ctx.closePath();
        }
        ctx.beginPath();
        ctx.moveTo(c.width / 2 - 200, c.height / 2 + 300);
        ctx.lineTo(c.width / 2 - 250, c.height / 2 + 350);
        ctx.moveTo(c.width / 2 - 200, c.height / 2 + 300);
        ctx.lineTo(c.width / 2 - 150, c.height / 2 + 350);
        ctx.moveTo(c.width / 2 - 200, c.height / 2 + 300);
        ctx.lineTo(c.width / 2 - 200, c.height / 2 - 275);
        ctx.lineTo(c.width / 2, c.height / 2 - 275);
        ctx.lineTo(c.width / 2, c.height / 2 - 225);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
    }
    drawBody(n) {
        ctx.beginPath();
        switch (n) {
            case 0:
                ctx.arc(c.width / 2, c.height / 2 - 150, 75, 0, Math.PI * 2);
                break;
            case 1:
                ctx.moveTo(c.width / 2, c.height / 2 - 75);
                ctx.lineTo(c.width / 2, c.height / 2 + 250);
                break;
            case 2:
                ctx.moveTo(c.width / 2, c.height / 2);
                ctx.lineTo(c.width / 2 - 75, c.height / 2 + 100);
                break;
            case 3:
                ctx.moveTo(c.width / 2, c.height / 2);
                ctx.lineTo(c.width / 2 + 75, c.height / 2 + 100);
                break;
            case 4:
                ctx.moveTo(c.width / 2, c.height / 2 + 250);
                ctx.lineTo(c.width / 2 + 75, c.height / 2 + 350);
                break;
            case 5:
                ctx.moveTo(c.width / 2, c.height / 2 + 250);
                ctx.lineTo(c.width / 2 - 75, c.height / 2 + 350);
                break;
            case 6:
                ctx.arc(c.width / 2 + 30, c.height / 2 - 160, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                break;
            case 7:
                ctx.arc(c.width / 2 - 30, c.height / 2 - 160, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                break;
            case 8:
                ctx.arc(c.width / 2, c.height / 2 - 90, 40, 11 * Math.PI / 6, 7 * Math.PI / 6, true);
                break;
            case 9:
                this.lose();
                break;
        }
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
        this.guesses++;
    }
}
class Guess {
    constructor(guess) {
        this.guess = guess.toLowerCase();
    }
    inWord() {
        return hangman.word.toLowerCase().split("").includes((this.guess).toLowerCase());
    }
    correct() {
        hangman.showLetter(this.guess);
    }
    incorrect() {
        hangman.drawBody(hangman.guesses);
        hangman.addToGuessed(this.guess);
    }
}

//Event Listeners
document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if ((/[a-zA-Z]/).test(input.value)) {
            let guess = new Guess(input.value);
            if (guess.inWord()) guess.correct();
            else guess.incorrect();
            if (hangman.amountGuessed == hangman.word.length) hangman.win();
            input.value = "";
        }
    }
});

//Functions
const newGame = wordList => {
    hangman = new Hangman(wordList);
    hangman.draw();
}