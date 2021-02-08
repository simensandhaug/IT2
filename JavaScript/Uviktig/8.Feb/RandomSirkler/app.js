const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const dInput = document.getElementById("dInput");
const amountInput = document.getElementById("amountInput");
const generateCircles = (amount, d, color) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i<amount; i++) {
        let xPos = Math.random() * canvas.width;
        let yPos = Math.random() * canvas.height;
        const circle = new Circle(xPos, yPos, d, `rgb(${ Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
        circle.draw();
    }
}
class Circle {
    constructor(x, y, d, color) {
        this.x = x;
        this.y = y;
        this.r = d/2;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
generateCircles(100, 20, 'red');
document.getElementById("button").addEventListener("click", () => {
generateCircles(parseInt(amountInput.value), parseInt(dInput.value), 'red')
});