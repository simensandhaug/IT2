const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const list = document.getElementById("list");
let currentStartAngle = 0;

const data = [{
        name: 'R',
        p: 2.4 / 100,
        color: '#9e2416'
    },
    {
        name: 'SV',
        p: 6 / 100,
        color: '#e84ad0'
    },
    {
        name: 'AP',
        p: 27.4 / 100,
        color: '#e4002b'
    },
    {
        name: 'SP',
        p: 10.3 / 100,
        color: '#69be28'
    },
    {
        name: 'MDG',
        p: 3.2 / 100,
        color: '#04753c'
    },
    {
        name: 'KRF',
        p: 4.2 / 100,
        color: '#fcce03'
    },
    {
        name: 'V',
        p: 4.4 / 100,
        color: '#006666'
    },
    {
        name: 'H',
        p: 25 / 100,
        color: '#0065f1'
    },
    {
        name: 'FRP',
        p: 15.2 / 100,
        color: '#024c93'
    },
    {
        name: 'Annet',
        p: 1.9 / 100,
        color: 'grey',
    }
]

class Sector {
    constructor(x, y, r, startAngle, endAngle, color, name) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.start = startAngle;
        this.end = endAngle;
        this.color = color;
        this.name = name;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.start, this.end);
        ctx.lineTo(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    addToList() {
        let el = document.createElement('p');
        let text = document.createTextNode((this.name));
        el.appendChild(text);
        el.style.color = this.color;
        el.style.fontWeight = 'bold';
        list.appendChild(el);
    }
}

for (let i = 0; i < data.length; i++) {
    let sector = new Sector(canvas.width / 2, canvas.height / 2, 200, currentStartAngle, Math.PI * 2 * data[i].p + currentStartAngle, data[i].color, data[i].name);
    sector.draw();
    sector.addToList();
    currentStartAngle = Math.PI * 2 * data[i].p + currentStartAngle;
}