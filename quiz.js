const questions = [
    {
        Question: " Which is largest animal in the world?",
        Answer: [
            {text: "Shark",correct: false},
            {text:  "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        Question: " Which is largest animal in the world?",
        Answer: [
            {text: "Shark",correct: false},
            {text:  "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        Question: " Which is largest animal in the world?",
        Answer: [
            {text: "Shark",correct: false},
            {text:  "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        Question: " Which is largest animal in the world?",
        Answer: [
            {text: "Shark",correct: false},
            {text:  "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    }
 
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("Next-btn");

let currentQuestionIndex = 0;
score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    NextButton.innerHTML = "Next";
    showQuestion();
    
}

function  showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        answerButton.appendChild(button);
    });

}

startQuiz();