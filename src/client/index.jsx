import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {QuizGame} from './QuizGame';
import {Home} from './Home';

const notFound = () => {
    return (
        <div>
            <h2>not found hehe</h2>
        </div>
    )
}

const App = () => {
    return (
        
       
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/quizgame' component={QuizGame}></Route>
                    <Route exact path='/' component={Home}></Route>
                    <Route component={notFound}></Route>
                </Switch>
            </div>
        </BrowserRouter> 
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));








// let answers = document.querySelector(".answers");
// let question = document.getElementById("question");

// // current index of randomQuizzes
// let current = 0;
// //empty array that will be filled with randomized quizzes
// let randomQuizzes = randomizingQuiz(quizzes);


// checkIfEnd(current);    




// /**************************************************************************/ 
// /*************************   ALL FUNCTIONS   ******************************/ 
// /**************************************************************************/ 



// //function that display first question
// export function questionDisplay(randomQuestion) 
// {
//     question.innerText = randomQuestion.question
//     randomQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerText = answer.text;
//         button.id = answer.id;
//         button.addEventListener("click", selectAnswer);
//         answers.appendChild(button);
//     });
// }

// // function that resets buttons
// export function resetState() {
//     while(answers.firstChild) {
//         answers.removeChild(answers.firstChild);
//     }
// }

// //function that shows if answer was correct
// export function selectAnswer(e) {
//     let correct = randomQuizzes[current].correct;    
//     if(e.toElement.id == correct) {
//         alert("correct")
//     } else {
//         alert("not correct")
//     }

//     current++;
//     checkIfEnd(current);
// }


// //function that checks if all questions were asked
// export function checkIfEnd() {
//     resetState();
//     if(current < randomQuizzes.length) {
//         questionDisplay(randomQuizzes[current]);
        
//     } else {
//         alert("eeeend")
//     }
// }

// //function that returns randomQuizzes with randomly separated quizzes
// export function randomizingQuiz(quizzes) {
//     let shuffledQuizz = [];
//     let importedQuiz = quizzes;
//     let randomNumber;
//     let randomNum = () => {
//         return Math.floor(Math.random() * importedQuiz.length);
//     }

//     const i = quizzes.length;
//     let counter = 0;
    
//     while (counter < i) {
//         randomNumber = randomNum();
//         shuffledQuizz.push(importedQuiz[randomNumber]);
//         importedQuiz.splice(randomNumber, 1);
//         counter++;
//     }

//     return shuffledQuizz;
// } 