const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const input = document.getElementById("letterInput");

//Random Words
var wordList;
fetch('http://random-word-api.herokuapp.com//word?number=1000')
    .then(res => res.json())
    .then(data => wordList = data)
    .then(() => console.log(wordList))
//Variables
let hangman;

//Classes
class Hangman {
    constructor(words) {
        this.word = words[Math.floor(Math.random() * words.length)];
        this.guesses = 0;
        this.amountGuessed = 0;
    }
    win() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '60px Arial';
        ctx.fillText("You Win!", canvas.width / 2 - 130, canvas.height / 2)
        setTimeout(() => {
            newGame();
        }, 5000);
    }
    lose() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '60px Arial';
        ctx.fillText("You Lose!", canvas.width / 2 - 145, canvas.height / 2)
        setTimeout(() => {
            newGame();
        }, 5000);
    }
    drawLetterOnPos(i) {
        this.amountGuessed++;
        ctx.beginPath();
        ctx.font = '45px Arial'
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.word[i], canvas.width / this.word.length * i + 62.5, canvas.height / 2 - 358);
        ctx.closePath();
    }
    showLetter(n) {
        for (let i = 0; i < this.word.length; i++) {
            if (this.word.split("")[i].toLowerCase() == n) hangman.drawLetterOnPos(i);
        }
    }
    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.word.length; i++) {
            ctx.beginPath();
            ctx.moveTo(canvas.width / this.word.length * i + 50, canvas.height / 2 - 350);
            ctx.lineTo(canvas.width / this.word.length * i + 100, canvas.height / 2 - 350);
            ctx.strokeStyle = '#ffffff';
            ctx.stroke();
            ctx.closePath();
        }
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 200, canvas.height / 2 + 300);
        ctx.lineTo(canvas.width / 2 - 250, canvas.height / 2 + 350);
        ctx.moveTo(canvas.width / 2 - 200, canvas.height / 2 + 300);
        ctx.lineTo(canvas.width / 2 - 150, canvas.height / 2 + 350);
        ctx.moveTo(canvas.width / 2 - 200, canvas.height / 2 + 300);
        ctx.lineTo(canvas.width / 2 - 200, canvas.height / 2 - 275);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - 275);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 - 225);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.closePath();
    }
    drawBody(n) {
        ctx.beginPath();
        switch (n) {
            case 0:
                ctx.arc(canvas.width / 2, canvas.height / 2 - 150, 75, 0, Math.PI * 2);
                break;
            case 1:
                ctx.moveTo(canvas.width / 2, canvas.height / 2 - 75);
                ctx.lineTo(canvas.width / 2, canvas.height / 2 + 250);
                break;
            case 2:
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.lineTo(canvas.width / 2 - 75, canvas.height / 2 + 100);
                break;
            case 3:
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.lineTo(canvas.width / 2 + 75, canvas.height / 2 + 100);
                break;
            case 4:
                ctx.moveTo(canvas.width / 2, canvas.height / 2 + 250);
                ctx.lineTo(canvas.width / 2 + 75, canvas.height / 2 + 350);
                break;
            case 5:
                ctx.moveTo(canvas.width / 2, canvas.height / 2 + 250);
                ctx.lineTo(canvas.width / 2 - 75, canvas.height / 2 + 350);
                break;
            case 6:
                ctx.arc(canvas.width / 2 + 30, canvas.height / 2 - 160, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                break;
            case 7:
                ctx.arc(canvas.width / 2 - 30, canvas.height / 2 - 160, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                break;
            case 8:
                ctx.arc(canvas.width / 2, canvas.height / 2 - 90, 40, 11 * Math.PI / 6, 7 * Math.PI / 6, true);
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
const newGame = () => {
    hangman = new Hangman(wordList);
    hangman.draw();
}
newGame();