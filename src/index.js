import quizzes from "./quiz.js";


let question = document.querySelector(".question");
let answer1 = document.querySelector(".answer-1");
let answer2 = document.querySelector(".answer-2");
let answer3 = document.querySelector(".answer-3");
let answer4 = document.querySelector(".answer-4");

//empty array that will be filled with randomized quizzes
let randomQuizzes = [];

randomizingQuiz();

questionDisplay();    


console.log(e);







//function that display first question
function questionDisplay() 
    {
        question.innerText = randomQuizzes[0].question

        answer1.innerText = randomQuizzes[0].answer1
        answer2.innerText = randomQuizzes[0].answer2
        answer3.innerText = randomQuizzes[0].answer3
        answer4.innerText = randomQuizzes[0].answer4
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