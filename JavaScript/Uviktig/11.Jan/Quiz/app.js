//Functions
function buildQuiz() {
    const output = [];
    questions.forEach(
        (currentQ, qNr) => {
            const answers = [];
            for (letter in currentQ.answers) {
                answers.push(
                    `<label>
            <input type="radio" name="question${qNr}" value="${letter}">
            ${letter} :
            ${currentQ.answers[letter]}
          </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQ.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQ, qNr) => {
        const answerContainer = answerContainers[qNr];
        const selector = `input[name=question${qNr}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQ.correctAnswer) {
            numCorrect++;
            answerContainers[qNr].style.color = 'lightgreen';
        } else answerContainers[qNr].style.color = 'red';
    });
    resultsContainer.innerHTML = `${numCorrect} ut av ${questions.length}`;
}

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');
const questions = [{
        question: "Hvem av disse er skuespillere i Game Of Thrones?",
        answers: {
            a: "Dwayne Johnson",
            b: "Jennifer Lawrence",
            c: "Kit Harington",
            d: "Chris Hemsworth"
        },
        correctAnswer: "c"
    },
    {
        question: "Hva heter den kinesiske millionbyen hvor en ny type coronavirus ble påvist i desember 2019?",
        answers: {
            a: "Shanghai",
            b: "Beijing",
            c: "Wuhan",
            d: "Guangzhou"
        },
        correctAnswer: "c"
    },
    {
        question: "Hva het den russiske kjemikeren som regnes for å være 'periodesystemets far'?",
        answers: {
            a: "Pierre Curie",
            b: "Dimitrij Mendelejev",
            c: "Albert Einstein",
            d: "Frances H. Arnold"
        },
        correctAnswer: "b"
    },
    {
        question: "Hvilken gass dannes dersom du blander eddik og natron?",
        answers: {
            a: "Karbondioksid",
            b: "Oksygen",
            c: "Natriumbromid",
            d: "Natronsulfid",
        },
        correctAnswer: "a"
    }
];

//Startup
buildQuiz();

//Eventlisteners
submitBtn.addEventListener('click', showResults);