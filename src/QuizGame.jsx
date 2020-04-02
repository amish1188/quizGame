import React, { Component } from 'react';
import {quizzes} from "./quiz";
import {QuestionContainer} from "./components/QuestionContainer";


export class QuizGame extends Component {
    constructor(props){
    super(props);
        this.state = {
            data: this.shuffle(quizzes)
        }
    }
   


   
    
    shuffle(a) {
        let shuffledQuizz = [];
        let importedQuiz = a;
        let randomNumber;
        let randomNum = () => {
            return Math.floor(Math.random() * importedQuiz.length);
        }

        const i = quizzes.length;
        let counter = 0;
        
        while (counter < i) {
            randomNumber = randomNum();
            shuffledQuizz.push(importedQuiz[randomNumber]);
            importedQuiz.splice(randomNumber, 1);
            counter++;
        }
        
        return shuffledQuizz
    }

    render() {
        console.log(this.state.data);
        return( 
                
                <QuestionContainer info= {this.state.data}></QuestionContainer>
            
        )
    }
}

