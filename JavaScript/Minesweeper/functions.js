function setup() {
    clearInterval(timer);
    buttonEl.src = "images/Smile.png";
    winScreenEl.style.visibility = 'hidden';
    board = Array.from(Array(canvas.width / scale), () => new Array(canvas.height / scale));
    mines = 99;
    mineCount = mines;
    time = 0;
    mineCountEl.innerHTML = String(mineCount).padStart(3, '0');
    timerEl.innerHTML = String(time).padStart(3, '0');

    timer = setInterval(function () {
        time++;
        timerEl.innerHTML = String(time).padStart(3, '0');
    }, 1000)

    makeBoard();
    placeMines();
    getCellValues();
    draw();

    document.addEventListener("click", click);
    document.addEventListener("contextmenu", flag);
    document.addEventListener("dblclick", expand);
    document.addEventListener("auxclick", expand);
}

function Cell(x, y, w, h, isMine, isFlagged, isClicked) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isMine = isMine;
    this.isClicked = isClicked;
    this.isFlagged = isFlagged;
    if (this.isFlagged) this.value = 9;
    else if (this.isMine) this.value = 10;
    else this.value = 0;
}

function makeBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = new Cell(i * scale, j * scale, scale, scale, false, false, false);
        }
    }
}

function placeMines() {
    for (let k = 0; k < mines; k++) {
        let x = getRandomNum(canvas.width / scale);
        let y = getRandomNum(canvas.height / scale);

        if (!board[x][y].isMine) board[x][y].isMine = true;
        else k--;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].isClicked && board[i][j].isMine) {
                if (board[i][j].deathMine) {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(i * scale, j * scale, scale, scale);
                } else {
                    ctx.drawImage(imgs[0], i * scale, j * scale, scale, scale);
                }
                ctx.drawImage(imgMine, i * scale, j * scale, scale, scale);
            } else if (board[i][j].isFlagged) {
                ctx.drawImage(imgFlag, i * scale, j * scale, scale, scale);
            } else if (board[i][j].isClicked) {
                ctx.drawImage(imgs[board[i][j].value], i * scale, j * scale, scale, scale);
            } else {
                ctx.drawImage(imgOpen, i * scale, j * scale, scale, scale);
            }
        }
    }
}

function getCellValue(cell) {
    let i = cell.x / scale;
    let j = cell.y / scale;
    let value = 0;

    //Mid left
    if (i - 1 >= 0 && j >= 0) {
        if (board[i - 1][j].isMine) value++;
    }
    //Top left
    if (i - 1 >= 0 && j - 1 >= 0) {
        if (board[i - 1][j - 1].isMine) value++;
    }
    //Bottom left
    if (i - 1 >= 0 && j + 1 < 25) {
        if (board[i - 1][j + 1].isMine) value++;
    }
    //Mid top
    if (i >= 0 && j - 1 >= 0) {
        if (board[i][j - 1].isMine) value++;
    }
    //Mid bottom
    if (i >= 0 && j + 1 < 25) {
        if (board[i][j + 1].isMine) value++;
    }
    //Mid right
    if (i + 1 < 25 && j >= 0) {
        if (board[i + 1][j].isMine) value++;
    }
    //Top right
    if (i + 1 < 25 && j - 1 >= 0) {
        if (board[i + 1][j - 1].isMine) value++;
    }
    //Bottom right
    if (i + 1 < 25 && j + 1 < 25) {
        if (board[i + 1][j + 1].isMine) value++;
    }

    cell.value = value;
}

function getCellValues() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            getCellValue(board[i][j]);
        }
    }
}

function openCell(x, y) {
    if (board[x] && board[x][y]) {
        if (board[x][y].isFlagged) return;
        else if (board[x][y].isMine) gameOver(x, y);
        else if (board[x][y].value == 0) {
            if (!board[x][y].isClicked) {
                board[x][y].isClicked = true;
                for (let y2 = -1; y2 < 2; y2++) {
                    for (let x2 = -1; x2 < 2; x2++) {
                        if (y2 == 0 && x2 == 0) continue
                        openCell(x + x2, y + y2);
                    }
                }
            }
        } else if (!board[x][y].isClicked) {
            board[x][y].isClicked = true;
        } else return;
    }
}

function expand(evt) {
    let mousePos = getMousePos(canvas, evt);
    let targetCell = {
        x: Math.floor(mousePos.x / scale),
        y: Math.floor(mousePos.y / scale),
    }
    if (board[targetCell.x] && board[targetCell.x][targetCell.y]) {
        if (board[targetCell.x][targetCell.y].isClicked) {
            let value = board[targetCell.x][targetCell.y].value;
            let amountOfFlags = 0;
            for (let y2 = -1; y2 < 2; y2++) {
                for (let x2 = -1; x2 < 2; x2++) {
                    if (board[targetCell.x + x2] && board[targetCell.x + x2][targetCell.y + y2]) {
                        if (board[targetCell.x + x2][targetCell.y + y2].isFlagged) amountOfFlags++;
                    }
                }
            }
            if (amountOfFlags === value) {
                for (let y2 = -1; y2 < 2; y2++) {
                    for (let x2 = -1; x2 < 2; x2++) {
                        if (y2 == 0 && x2 == 0) continue
                        openCell(targetCell.x + x2, targetCell.y + y2);
                    }
                }
            }
            draw();
        }
    }
    draw();
}

function getRandomNum(num) {
    return Math.floor(Math.random() * num);
}

function gameOver(x, y) {
    document.removeEventListener('click', click);
    document.removeEventListener('contextmenu', flag);
    document.removeEventListener("dblclick", expand);
    document.removeEventListener("auxclick", expand);
    buttonEl.src = "images/Dead.png";
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].isMine) board[i][j].isClicked = true;
        }
    }
    board[x][y].deathMine = true;
    draw();
    clearInterval(timer);
}

function gameWin() {
    document.removeEventListener('click', click);
    document.removeEventListener('contextmenu', flag);
    document.removeEventListener("dblclick", expand);
    document.removeEventListener("auxclick", expand);
    buttonEl.src = "images/Cool.png";
    clearInterval(timer);
    winScreenEl.style.visibility = 'visible';
    winScreenTimeEl.innerHTML = 'You Won! \<br>\ Time: ' + time;
}

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
        scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

    return {
        x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
        y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
    }
}

function checkWin() {
    return board.every(row => row.every(cell => cell.isClicked || cell.isFlagged));
}

function flag(evt) {
    evt.preventDefault();
    let mousePos = getMousePos(canvas, evt);
    let targetCell = {
        x: Math.floor(mousePos.x / scale),
        y: Math.floor(mousePos.y / scale),
    }
    if (targetCell.x >= 0 && targetCell.x <= canvas.width / scale && targetCell.y >= 0 && targetCell.y <= canvas.height) {
        if (!board[targetCell.x][targetCell.y].isFlagged && !board[targetCell.x][targetCell.y].isClicked) {
            board[targetCell.x][targetCell.y].isFlagged = true;
            mineCount--;
            mineCountEl.innerHTML = String(mineCount).padStart(3, '0');
        } else if (board[targetCell.x][targetCell.y].isFlagged) {
            board[targetCell.x][targetCell.y].isFlagged = false;
            mineCount++;
            mineCountEl.innerHTML = String(mineCount).padStart(3, '0');
        }
        draw();
    }
    if (checkWin()) gameWin();
}

function click(evt) {
    let mousePos = getMousePos(canvas, evt);
    let targetCell = {
        x: Math.floor(mousePos.x / scale),
        y: Math.floor(mousePos.y / scale),
    }
    if (targetCell.x >= 0 && targetCell.x <= canvas.width / scale && targetCell.y >= 0 && targetCell.y <= canvas.height) {
        openCell(targetCell.x, targetCell.y);
        draw();
    }
    if (checkWin()) gameWin();
}