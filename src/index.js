import quizzes from "./quiz.js";


let question = document.getElementById("question");
let answer1 = document.getElementById("answer-1");
let answer2 = document.getElementById("answer-2");
let answer3 = document.getElementById("answer-3");
let answer4 = document.getElementById("answer-4");
const answers = document.querySelector(".answers");

//empty array that will be filled with randomized quizzes
let randomQuizzes = []
let current = 0;
randomizingQuiz();
questionDisplay(current);    

nextQuestion();





//function that display first question
function questionDisplay(currentQuestion) 
{
    question.innerText = randomQuizzes[currentQuestion].question
    answer1.innerText = randomQuizzes[currentQuestion].answer1
    answer2.innerText = randomQuizzes[currentQuestion].answer2
    answer3.innerText = randomQuizzes[currentQuestion].answer3
    answer4.innerText = randomQuizzes[currentQuestion].answer4
    
}

function nextQuestion() {
    let correct = randomQuizzes[current].correct
    answers.addEventListener("click", e => 
    {
        if (current >3){
            alert("game finished");
        } else {
            if(e.toElement.id === `answer-${correct}`){
                alert("correct");
            } else {
                alert("not correct");
            }
            current++;
            console.log(current);
            questionDisplay(current);
            
        }

    })
}


//function that returns randomQuizzes with randomly separated quizzes
function randomizingQuiz() {
    let importedQuiz = quizzes;
    let randomNumber;
    let randomNum = () => {
        return Math.floor(Math.random() * importedQuiz.length);
    }

    let counter = 0;
    
    while (counter < 3) {
        randomNumber = randomNum();
        randomQuizzes.push(importedQuiz[randomNumber]);
        importedQuiz.splice(randomNumber, 1);
        counter++;
    }
} 