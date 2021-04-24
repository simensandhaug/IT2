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
let endResultEl = document.getElementById("endResults");
let currentQ = 0;
let score = 0;
let question;

nxtButtonEl.innerHTML = `<button id="next">Next</button>`;

const questions = [{
        q: "What is the capital of Chile?",
        choices: {
            a: "Sinaloa",
            b: "Santiago",
            c: "Brazilia",
            d: "Tongo",
        },
        type: "Single Choice",
        ans: "b",
        playerAnswer: "",
    },
    {
        q: "What is the highest mountain in Britain?",
        choices: {
            a: "Mt. Chiliad",
            b: "Ben Nevis",
            c: "Mt. Coronet",
            d: "Snowdon",
        },
        type: "Single Choice",
        ans: "b",
        playerAnswer: "",
    },
    {
        q: "What is the smallest country in the world?",
        choices: {
            a: "Vatican City",
            b: "Montenegro",
            c: "San Marino",
            d: "Monaco"
        },
        type: "Single Choice",
        ans: "a",
        playerAnswer: "",
    },
    {
        q: "Which of these countries have never been in a world war?",
        choices: {
            a: "Switzerland",
            b: "Norway",
            c: "Sweden",
            d: "Belgium",
        },
        type: "Multiple Choice",
        ans: "a,c",
        playerAnswer: "",
    },
    {
        q: "Alberta is a province in which country?",
        choices: {
            a: "South-Africa",
            b: "Britain",
            c: "USA",
            d: "Canada",
        },
        type: "Single Choice",
        ans: "d",
        playerAnswer: "",
    },
    {
        q: "How many time zones are there in Russia?",
        choices: {
            a: "12",
            b: "13",
            c: "11",
            d: "8",
        },
        type: "Single Choice",
        ans: "c",
        playerAnswer: "",
    },
    {
        q: "How many stripes are there on the US flag?",
        choices: {
            a: "13",
            b: "11",
            c: "17",
            d: "52",
        },
        type: "Single Choice",
        ans: "a",
        playerAnswer: "",
    },
    {
        q: "Which of the following empires had no written language?",
        choices: {
            a: "Aztec",
            b: "Roman",
            c: "Incan",
            d: "Egyptian",
        },
        type: "Single Choice",
        ans: "c",
        playerAnswer: "",
    },
    {
        q: "What country has the most islands in the world?",
        choices: {
            a: "South-Africa",
            b: "Italy",
            c: "Norway",
            d: "Sweden",
        },
        type: "Single Choice",
        ans: "d",
        playerAnswer: "",
    },
    {
        q: "In what ocean is the lowest natural place on planet Earth?",
        choices: {
            a: "Mediterranean",
            b: "Atlantic Ocean",
            c: "Pacific Ocean",
            d: "Arctic Ocean",
        },
        type: "Single Choice",
        ans: "c",
        playerAnswer: "",
    },
    {
        q: "What city do The Beatles come from?",
        choices: {
            a: "Manchester",
            b: "Liverpool",
            c: "Birmingham",
            d: "London",
        },
        type: "Single Choice",
        ans: "b",
        playerAnswer: "",
    },
    {
        q: "When was Netflix founded?",
        choices: {
            a: "2015",
            b: "2009",
            c: "2001",
            d: "1997",
        },
        type: "Single Choice",
        ans: "d",
        playerAnswer: "",
    },
    {
        q: "What is Disney's first film?",
        choices: {
            a: "Mickey Mouse's Adventures",
            b: "Lady and the Tramp",
            c: "Snow White",
            d: "Frozen",
        },
        type: "Single Choice",
        ans: "c",
        playerAnswer: "",
    },
    {
        q: "What was the most-watched series on Netflix in 2019?",
        choices: {
            a: "Stranger Things",
            b: "Game Of Thrones",
            c: "Breaking Bad",
            d: "The Queen's Gambit",
        },
        type: "Single Choice",
        ans: "a",
        playerAnswer: "",
    },
    {
        q: "In which year was Joan of Arc burned at the stake?",
        choices: {
            a: "800 BC",
            b: "1830 AD",
            c: "1945 AD",
            d: "1431 AD",
        },
        type: "Single Choice",
        ans: "d",
        playerAnswer: "",
    },
    {
        q: "Which team has won the Champions League most times?",
        choices: {
            a: "Manchester United",
            b: "Barcelona",
            c: "Real Madrid",
            d: "Juventus",
        },
        type: "Single Choice",
        ans: "c",
        playerAnswer: "",
    },
    {
        q: "What is the most famous Mexican beer?",
        choices: {
            a: "Tecate",
            b: "Bud Light",
            c: "Budweiser",
            d: "Corona",
        },
        type: "Single Choice",
        ans: "d",
        playerAnswer: "",
    },
    {
        q: "What is the capital of Westeros in Game of Thrones?",
        choices: {
            a: "Dragonstone",
            b: "King's Landing",
            c: "Winterfell",
            d: "Highgarden",
        },
        type: "Single Choice",
        ans: "b",
        playerAnswer: "",
    },
    {
        q: "Which of these ARE Bob Dylan songs?",
        choices: {
            a: "Like A Rolling Stone",
            b: "Back In Black",
            c: "The Times They Are a-Changin'",
            d: "Hotel California",
        },
        type: "Multiple Choice",
        ans: "a,c",
        playerAnswer: "",
    },
    {
        q: "Which singer was known amongst other things as 'The King of Pop'?",
        choices: {
            a: "Elvis Presley",
            b: "Michael Jackson",
            c: "Freddie Mercury",
            d: "Nick Jonas",
        },
        type: "Single Choice",
        ans: "b",
        playerAnswer: "",
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
                labelOutput.push(`<label for="radio">${key}. ${value}</label>`);
                radioOutput.push(`<input type="radio" name="radio" id="${key}" class="choice">`);
            }
        else
            for (const [key, value] of Object.entries(this.choices)) {
                labelOutput.push(`<label for="radio">${key}. ${value}</label>`);
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

    questions.forEach(question => {
        endResultEl.innerHTML += `<h2>${question.q}</h2>`
        endResultEl.innerHTML += `<div class="endScreenQuestions">`;
        for (const [key, value] of Object.entries(question.choices)) endResultEl.innerHTML += `${key}. ${value}<br>`;
        endResultEl.innerHTML += question.ans == question.playerAnswer ? `<p style="color:green">Your Answer: ${question.playerAnswer}</p>`: `<p style="color:red">Your Answer: ${question.playerAnswer}</p>`;
        endResultEl.innerHTML += `<p style="color:green">Correct Answer: ${question.ans}</p>`;
        endResultEl.innerHTML += `</div>`
    });
}

const nextQ = qNr => {
    if (questions[qNr]) {
        question = new Question(questions[qNr].q, questions[qNr].choices, questions[qNr].type, questions[qNr].ans);
        question.showQuestion();
    } else endQuiz();
}

document.getElementById("next").addEventListener("click", () => {
    const playerAnswer = [];
    const choices = Array.from(document.querySelectorAll(".choice"));
    if (question.getType == "Single Choice") choices.forEach(choice => {
        if (choice.checked && choice.id == question.getAns) score++
    });
    else if (question.getType == "Multiple Choice") {
        let answers = question.getAns.split(",");
        let correctAns = true;
        choices.forEach(choice => {
            answers.forEach(ans => {
                if (choice.checked && ans.includes(choice.id) && correctAns) answers.splice(answers.indexOf(ans), 1);
                else if (choice.checked && !ans.includes(choice.id)) correctAns = false;
            });
        });
        if (answers.length == 0 && correctAns) score++;
    }
    choices.forEach(choice => {
        if(choice.checked) playerAnswer.push(choice.id);
    });
    if(question.getType == "Multiple Choice") questions[currentQ].playerAnswer = playerAnswer.join(",");
    else questions[currentQ].playerAnswer = playerAnswer.join("");
    console.log(questions[currentQ].playerAnswer)
    choices.forEach(choice => choice.checked = false);
    currentQ++;
    nextQ(currentQ);
});
nextQ(currentQ);