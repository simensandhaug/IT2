let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let score = 0;
let gameOver = false;

canvas.width = 500;
canvas.height = 500;

document.getElementById("pongLyd").volume = 0.5;

ball = {
    radius: 15,
    x: canvas.width / 2,
    y: canvas.height / 2,
    dx: 5,
    dy: -10,
    color: 'red'
}

paddle = {
    x: (canvas.width / 2) - 40,
    y: canvas.height - 30,
    height: 10,
    width: 100,
    color: 'blue'
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath()
    ctx.fillStyle = paddle.color
    ctx.rect(
        paddle.x, paddle.y,
        paddle.width, paddle.height
    )
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = ball.color
    ctx.arc(
        ball.x, ball.y,
        ball.radius,
        0, Math.PI * 2 * ball.radius * ball.radius
    )
    ctx.fill()

}



function update() {
    if (!gameOver) {
        document.getElementById("score").innerHTML = "Score: " + score;
        ball.x += ball.dx
        ball.y += ball.dy

        //Treffer kanten av canvas på alle sider
        if (ball.x - ball.radius <= 0) ball.dx *= -1
        if (ball.x + ball.radius >= canvas.width) ball.dx *= -1
        if (ball.y - ball.radius <= 0) ball.dy *= -1
        if (ball.y + ball.radius >= canvas.height) {
            gameOver = true;
            document.getElementById("score").innerHTML = "Game Over! <br> Score: " + score;
            document.getElementById("restart").innerHTML = "Press F5 to restart game"
        }

        if(ball.y + ball.radius > paddle.y) gameOver = true;
        //Treffer toppen
        if (paddle.x < ball.x + ball.radius &&
            paddle.x + paddle.width > ball.x &&
            paddle.y < ball.y + ball.radius &&
            paddle.y + paddle.height > ball.y) {
            ball.dy *= -1
            score++;
            ball.dy *= 1.025
            ball.dx *= 1.025
            document.getElementById("pongLyd").play();
        }
        draw()
    }
}

var keys = {
    LEFT: 37,
    RIGHT: 39,
    A: 65,
    D: 68
}

document.body.onkeyup =
    document.body.onkeydown = function (e) {
        var kc = e.keyCode || e.which;
        keys[kc] = e.type == 'keydown';
    };

function movePaddle(dx) {
    paddle.x += dx;
};

function detectPaddleMovement() {
    if (keys[keys.LEFT] || keys[keys.A]) {
        if (paddle.x >= 0) movePaddle(-15);
    }
    if (keys[keys.RIGHT] || keys[keys.D]) {
        if (paddle.x + paddle.width <= canvas.width - 2) movePaddle(15);
    }
};


setInterval(function gameLoop() {
    update();
    detectPaddleMovement();
}, 1000 / 40)