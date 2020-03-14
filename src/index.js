import quizzes from "./quiz.js";


let question = document.querySelector(".question");
let answer1 = document.getElementsByClassName("answer-1");
let answer2 = document.getElementsByClassName("answer-2");
let answer3 = document.getElementsByClassName("answer-3");
let answer4 = document.getElementsByClassName("answer-4");


const randomQuizzes = [];


const randomizingQuiz = () => {
    let importedQuiz = quizzes;
    const randomNum = () => {
        let randomNum = Math.floor(Math.random() * importedQuiz.length);
        return randomNum;
    }
    let randomNumber = randomNum();
    randomQuizzes.push(importedQuiz[randomNumber]);
    importedQuiz.splice(randomNumber, 1);
    randomNumber = randomNum();
    randomQuizzes.push(importedQuiz[randomNumber]);
    importedQuiz.splice(randomNumber, 1);
    randomNumber = randomNum();
    randomQuizzes.push(importedQuiz[randomNumber]);
    importedQuiz.splice(randomNumber, 1);
    
    console.log(randomQuizzes);

    // for(let i = 0; i<quizzes.length; i++) {
    // }
} 

randomizingQuiz();


console.log(randomQuizzes[0].question);

const questionDisplay = () =>
    {
        question.innerText = randomQuizzes[0].question
    }
questionDisplay();    