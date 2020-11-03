const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const aiSwitch = document.getElementById("aiSwitch");
let botMode;
let round = 0;
let paddle1;
let paddle2;
let paddle1Score = 0;
let paddle2Score = 0;

canvas.width = 800;
canvas.height = 450;

document.addEventListener("keydown", e => {
    if (e.key == "w") paddle1.dy = -paddle1.speed;
    else if (e.key == "s") paddle1.dy = paddle1.speed;
    if (!botMode) {
        if (e.key == "ArrowUp") paddle2.dy = -paddle2.speed;
        else if (e.key == "ArrowDown") paddle2.dy = paddle2.speed;
    }
});

document.addEventListener("keyup", e => {
    if (e.key == "w" || e.key == "s") paddle1.dy = 0;
    if (!botMode) {
        if (e.key == "ArrowUp" || e.key == "ArrowDown") paddle2.dy = 0;
    }
})

const setup = () => {
    if(aiSwitch.checked) botMode = true;
    else botMode = false;
    paddle1 = {
        w: 10,
        h: 80,
        x: 50,
        y: canvas.height / 2,
        speed: 10,
        dy: 0,
        score: paddle1Score,
    }
    paddle2 = {
        w: 10,
        h: 80,
        x: canvas.width - 50,
        y: canvas.height / 2,
        speed: 10,
        dy: 0,
        score: paddle2Score,
    }
    ball = {
        radius: 10,
        x: canvas.width / 2,
        y: canvas.height / 2,
        dx: randomDX(),
        dy: getRandomInteger(-6, 6),
    }

    if(botMode) paddle2.h = 50;
}

const getRandomInteger = (min, max) => {
    if (Math.floor(Math.random() * (max - min + 1) + min) != 0) return Math.floor(Math.random() * (max - min + 1) + min);
    else getRandomInteger(min, max)
}

const randomDX = () => {
    if (Math.floor(Math.random() * 2) + 1 == 1) return -6;
    else return 6;
}

const update = () => {
    if (paddle1.y + paddle1.dy > 0 && paddle1.y + paddle1.dy < canvas.height - paddle1.h) paddle1.y += paddle1.dy;
    if (paddle2.y + paddle2.dy > 0 && paddle2.y + paddle2.dy < canvas.height - paddle2.h) paddle2.y += paddle2.dy;
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x - ball.radius > paddle1.x && ball.x - ball.radius <= paddle1.x + paddle1.w && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.h) {
        ball.dx *= -1;
        ball.dx *= 1.0005;
        paddle1.h -= 5;
    }
    if (ball.x + ball.radius >= paddle2.x && ball.x + ball.radius < paddle2.x + paddle2.w && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.h) {
        ball.dx *= -1;
        ball.dx *= 1.0005;
        paddle2.h -= 5;
    }
    if (ball.y + ball.radius >= canvas.height) ball.dy *= -1;
    if (ball.y - ball.radius <= 0) ball.dy *= -1;
    if (ball.x >= canvas.width) {
        paddle1Score++;
        round++;
        setup();
    }
    if (ball.x <= 0) {
        paddle2Score++;
        round++;
        setup();
    }

    if(paddle2.h == 0) {
        round++;
        paddle1Score++;
        setup();
    }

    if (botMode) {
        if (Math.sign(ball.dx) == 1) {
            botMove();
        }
    }

    draw();
}

const botMove = () => {
    paddle2.y = ball.y - paddle2.h / 2;
}

const draw = () => {

    //Clear og paddles
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);

    //Ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    //Midtlinje
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 10;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + 10, 80);
    ctx.lineTo(canvas.width / 2 + 10, canvas.height - 80);
    ctx.stroke();

    //Round
    ctx.font = '20px Arial';
    ctx.fillText("Round " + round, canvas.width / 2 - 28, 20)

    //Display score player 1 og player 2
    ctx.font = '40px Arial';
    ctx.fillText(paddle1.score, canvas.width / 2 - 120, 100);
    ctx.fillText(paddle2.score, canvas.width / 2 + 118, 100);

}

setup();

setInterval(function gameLoop() {
    update();
}, 20);