let scoreEl = document.getElementById("score");
let questionEl = document.getElementById("question");
let quizContainerEl = document.getElementById("quizContainer");
let typeEl = document.getElementById("type");
let radioContainerEl = document.getElementById("radioContainer");
let labelContainerEl = document.getElementById("labelContainer");
let containerEl = document.getElementById("container");
let nxtButtonEl = document.getElementById("nxtButton");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let currentQ = 0;
let score = 0;
let question;

nxtButtonEl.innerHTML = `<button id="next">Next</button>`;

const questions = [{
        q: "Hva er Elon Musk?",
        choices: {
            a: "Entrepenør",
            b: "Fashiondesigner",
            c: "Bilmekaniker"
        },
        type: "Single Choice",
        ans: "a"
    },
    {
        q: "Hva heter Asias største øy?",
        choices: {
            a: "Korsika",
            b: "Borneo",
            c: "Bali"
        },
        type: "Single Choice",
        ans: "b"
    },
    {
        q: "I hvilket hav befinner Marianegropen seg?",
        choices: {
            a: "Middelhavet",
            b: "Atlanterhavet",
            c: "Stillehavet"
        },
        type: "Single Choice",
        ans: "c"
    },
    {
        q: "Hvilket grunnstoffer er med i vann?",
        choices: {
            a: "Oksygen",
            b: "Helium",
            c: "Hydrogen",
            d: "Nitrogen"
        },
        type: "Multiple Choice",
        ans: "a,c"
    },
];

class Question {
    constructor(q, choices, type, ans) {
        this.q = q;
        this.choices = choices;
        this.type = type;
        this.ans = ans;
    }

    showQuestion() {
        questionEl.innerHTML = this.q;
        typeEl.innerHTML = this.type;
        const labelOutput = [];
        const radioOutput = [];
        if (this.type == "Single Choice")
            for (const [key, value] of Object.entries(this.choices)) {
                labelOutput.push(`<label for="radio">${value}</label>`);
                radioOutput.push(`<input type="radio" name="radio" id="${key}" class="choice">`);
            }
        else
            for (const [key, value] of Object.entries(this.choices)) {
                labelOutput.push(`<label for="radio">${value}</label>`);
                radioOutput.push(`<input type="checkbox" id="${key}" class="choice">`);
            }
        radioContainerEl.innerHTML = radioOutput.join("<br>");
        labelContainerEl.innerHTML = labelOutput.join("<br>");
    }

    get getAns() {
        return this.ans;
    }

    get getType() {
        return this.type;
    }
}

const drawResult = (score, currentQ) => {

    let p = score / currentQ;

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(canvas.width / 2, 100, 75, 0, 2 * Math.PI);
    ctx.moveTo(canvas.width / 2 + 50, 100);
    ctx.arc(canvas.width / 2, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#58dced";
    ctx.moveTo(canvas.width / 2 + 62.5, 100);
    ctx.arc(canvas.width / 2, 100, 62.5, 0, 2 * p * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.font = "30px Arial";
    let x = (Math.round(p * 100) == 100) ? (canvas.width / 2 - 35) : (canvas.width / 2 - 30);
    let y = canvas.height / 2 - 40;
    ctx.fillText(`${Math.round(p*100)}%`, x, y);
}

const endQuiz = () => {
    quizContainerEl.innerHTML = `<p id="score">${score} / ${currentQ}</p>`;
    typeEl.innerHTML = "";
    questionEl.innerHTML = "";
    nxtButtonEl.innerHTML = "";

    drawResult(score, currentQ);
}

const nextQ = qNr => {
    if (questions[qNr]) {
        question = new Question(questions[qNr].q, questions[qNr].choices, questions[qNr].type, questions[qNr].ans);
        question.showQuestion();
    } else endQuiz();
}

document.getElementById("next").addEventListener("click", () => {
    const choices = Array.from(document.querySelectorAll(".choice"));
    if (question.getType == "Single Choice") choices.forEach(choice => {
        if (choice.checked && choice.id == question.getAns) score++
    });
    else if (question.getType == "Multiple Choice") {
        let answers = question.getAns.split(",");
        let correctAns = true;
        choices.forEach(choice => {
            answers.forEach(ans => {
                if (choice.checked && choice.id == ans && correctAns) answers.splice(answers.indexOf(ans), 1);
                else if (choice.checked && choice.id != ans) correctAns = false;
            });
        });
        if (answers.length == 0 && correctAns) score++;
    }
    choices.forEach(choice => choice.checked = false);
    currentQ++;
    nextQ(currentQ);
});
nextQ(currentQ);