//Functions
function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else answerContainers[questionNumber].style.color = 'red';
    });
    resultsContainer.innerHTML = `${numCorrect} ut av ${myQuestions.length}`;
}

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitBtn = document.getElementById('submit');
const myQuestions = [{
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