let count = 0;
let gameStop = false;

//let colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'purple'];


(function () {

    let canvas, ctx, ball



    function init() {

        canvas = document.getElementById('myCanvas')
        ctx = canvas.getContext('2d')


        canvas.width = 500
        canvas.height = 500



        ball = {
            radius: 30,
            x: canvas.width / 2 + 100,
            y: canvas.height / 2 + 100,
            velX: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1),
            velY: (Math.random() * 5 + 5) * (Math.floor(Math.random() * 2) || -1)
        }
        box = {
            width: 50,
            height: 50,
            x: canvas.width / 2,
            y: canvas.height / 2,
        }

        window.requestAnimationFrame(update)
    }


    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.beginPath()
        ctx.rect(
            box.x, box.y,
            box.width, box.height
        )
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(
            ball.x, ball.y,
            ball.radius,
            0, Math.PI * 2
        )
        ctx.fill()
    }


    function update() {
        if (!gameStop) {
            document.getElementById("count").innerHTML = "Bounces: " + count;
            window.requestAnimationFrame(update)

            if (ball.y + ball.radius >= canvas.height) {
                ball.velY *= -1
                ball.y = canvas.height - ball.radius
                count++;
                // let rnd = Math.floor(Math.random() * colors.length) + 1;
                // ctx.fillStyle = colors[rnd]
            }

            if (ball.y - ball.radius <= 0) {
                ball.velY *= -1
                ball.y = ball.radius
                count++;
                // let rnd = Math.floor(Math.random() * colors.length) + 1;
                // ctx.fillStyle = colors[rnd]
            }

            if (ball.x - ball.radius <= 0) {
                ball.velX *= -1
                ball.x = ball.radius
                count++;
                // let rnd = Math.floor(Math.random() * colors.length) + 1;
                // ctx.fillStyle = colors[rnd]
            }

            if (ball.x + ball.radius >= canvas.width) {
                ball.velX *= -1
                ball.x = canvas.width - ball.radius
                count++;
                // let rnd = Math.floor(Math.random() * colors.length) + 1;
                // ctx.fillStyle = colors[rnd]
            }
            if (box.x < ball.x + ball.radius &&
                box.x + box.width > ball.x &&
                box.y < ball.y + ball.radius &&
                box.y + box.height > ball.y) {
                gameStop = true;
            }

            ball.x += ball.velX
            ball.y += ball.velY

            draw()
        } else {
            document.getElementById("gameOver").innerHTML = "Game Over!"
            document.getElementById("endingScore").innerHTML = "Score: " + count;
            document.getElementById("restart").innerHTML = "Press F5 to restart game!"
            document.getElementById("count").innerHTML = null;
            document.getElementById("endScreen").style.height = "501px";
            document.getElementById("endScreen").style.width = "501px";
        }
    }
    document.addEventListener('DOMContentLoaded', init)
    var keys = {};
    keys.LEFT = 37;
    keys.RIGHT = 39;
    keys.UP = 38;
    keys.DOWN = 40;
    document.body.onkeyup =
        document.body.onkeydown = function (e) {
            var kc = e.keyCode || e.which;
            keys[kc] = e.type == 'keydown';
        };

    function moveBox(dx, dy) {
        box.x += dx || 0;
        box.y += dy || 0;
    };

    function detectCharacterMovement() {
        if (keys[keys.LEFT]) {
            if(!box.x<=0) moveBox(-10);
        }
        if (keys[keys.RIGHT]) {
            if(box.x + box.width <= canvas.width-2) moveBox(10);
        }
        if (keys[keys.UP]) {
            if(!box.y<= 0)moveBox(0, -10);
        }
        if (keys[keys.DOWN]) {
            if(box.y + box.height <= canvas.height-2) moveBox(0, 10);
        }
    };
    setInterval(function () {
        detectCharacterMovement();
    }, 1000 / 50);

})()