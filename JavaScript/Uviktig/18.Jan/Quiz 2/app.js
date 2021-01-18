let scoreEl = document.getElementById("score");
let questionEl = document.getElementById("question");
let quizContainerEl = document.getElementById("quizContainer");
let currentQ = 0;
let score = 0;
let question;

const questions = [{
        q: "Hva er Elon Musk?",
        choices: {
            a: "Entrepenør",
            b: "Fashiondesigner",
            c: "Bilmekaniker"
        },
        ans: "a"
    },
    {
        q: "Hva heter Asias største øy?",
        choices: {
            a: "Korsika",
            b: "Borneo",
            c: "Bali"
        },
        ans: "b"
    },
    {
        q: "I hvilket hav befinner Marianegropen seg?",
        choices: {
            a: "Middelhavet",
            b: "Atlanterhavet",
            c: "Stillehavet"
        },
        ans: "c"
    }
];

class Question {
    constructor(q, choices, ans) {
        this.q = q;
        this.choices = choices;
        this.ans = ans;
    }

    showQuestion() {
        questionEl.innerHTML = this.q;
        const output = [];
        for(const [key, value] of Object.entries(this.choices)) output.push(`<label for="radio">${value}</label><input type="radio" name="radio" id="${key}" class="choice">`);
        quizContainerEl.innerHTML = output.join("<br>");
    }

    get getAns() {
        return this.ans;
    }
}

const endQuiz = () => scoreEl.innerHTML = `${score} ut av ${currentQ}`;

const nextQ = qNr => {
    if (questions[qNr]) {
        question = new Question(questions[qNr].q, questions[qNr].choices, questions[qNr].ans);
        question.showQuestion();
    } else endQuiz();
}

document.getElementById("next").addEventListener("click", () => {
    const choices = document.querySelectorAll(".choice");
    if(choices[0].checked || choices[1].checked ||choices[2].checked) {
        if(choices[0].checked && choices[0].id == question.getAns) score++;
        else if(choices[1].checked && choices[1].id == question.getAns) score++;
        else if(choices[2].checked && choices[2].id == question.getAns) score++;
        for(let i in choices) choices[i].checked = false;
        currentQ++;
        nextQ(currentQ);
    }
});
nextQ(currentQ);