const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const d1 = document.getElementById("fruitDisplay");
const d2 = document.getElementById("timeDisplay");
const highScoreDisplay = document.getElementById("highScoreDisplay");
const endScreen = document.getElementById("endScreen");
const endScore = document.getElementById("endScore");
const endTime = document.getElementById("endTime");
let snake;
let gameLoop;
let timer;
let seconds;
let score;
let currentDir;

if(parseInt(localStorage.getItem("highscore")) % 1 !== 0) {
    localStorage.setItem("highscore", 0);
}

//highScoreDisplay.innerHTML = "Highscore: " + getCookie("highscore") + " by " + getCookie("player");

function setup() {
    endScreen.style.visibility = "hidden";
    highScoreDisplay.innerHTML = "Highscore: " + localStorage.getItem("highscore") + " by " + localStorage.getItem("player");
    clearInterval(gameLoop, 1000);
    clearInterval(timer, 1000);
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    seconds = 0;
    score = 0;
    d1.innerHTML = 'Score: ' + score;
    d2.innerHTML = 'Time: ' + seconds;

    timer = setInterval(() => {
        seconds++;
        d2.innerHTML = 'Time: ' + seconds;
    }, 1000);

    gameLoop = setInterval(() => {
        snake.update();
        if (snake.eat(fruit)) {
            score++;
            d1.innerHTML = 'Score: ' + score;
            fruit.pickLocation();
        }
        if (snake.hit()) endGame();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        snake.draw();
        fruit.draw();
    }, 90);

    document.addEventListener('keydown', e => {
        let direction = e.key.replace('Arrow', '');
        if (direction == "w" || direction == 'Up') {
            if (currentDir != "Down") {
                direction = 'Up';
                currentDir = 'Up';
                snake.changeDirection(direction);
            }
        }
        if (direction == "s" || direction == 'Down') {
            if (currentDir != "Up") {
                direction = 'Down';
                currentDir = 'Down';
                snake.changeDirection(direction);
            }
        }
        if (direction == "a" || direction == 'Left') {
            if (currentDir != "Right") {
                direction = 'Left';
                currentDir = 'Left';
                snake.changeDirection(direction);
            }
        }
        if (direction == "d" || direction == 'Right') {
            if (currentDir != "Left") {
                direction = 'Right';
                currentDir = 'Right';
                snake.changeDirection(direction);
            }
        }
    });
};

const endGame = () => {
    console.log("You lost")
    clearInterval(gameLoop, 1000);
    clearInterval(timer, 1000);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    endScreen.style.visibility = "visible";
    endScore.innerHTML = "Score: " + score;
    endTime.innerHTML = "Time: " + seconds;

    checkHighscore(score);
}

const checkHighscore = (a) => {
    currentHighscore = localStorage.getItem("highscore");
    if (currentHighscore != "null" || currentHighscore != null) {
        if (a > parseInt(currentHighscore)) {
            localStorage.setItem("highscore", a);
            localStorage.setItem("player", prompt("Highscore name:"));
        }
    } else {
        localStorage.setItem("highscore", a);
        localStorage.setItem("player", prompt("Highscore name:"));
    }
    highScoreDisplay.innerHTML = "Highscore: " + currentHighscore + " by " + localStorage.getItem("player");
}
setup();