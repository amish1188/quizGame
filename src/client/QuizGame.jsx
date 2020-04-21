import React, { Component } from 'react';
//import {quizzes} from "../server/db/quiz";
import {QuestionContainer} from "./components/QuestionContainer";


export class QuizGame extends Component {
    constructor(props){
    super(props);
        this.state = {
            loading: true,
            data: []
            //this.shuffle(quizzes)
        }
    }
   
    async componentDidMount() {
        try {
            const response = await fetch("/api/quizesapi");
            const payload = await response.json();
            this.setState({
                data: payload,
                loading: false
            })
            console.log(payload[0].question);
        } catch (error) {
            console.log(error);
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
        //console.log(this.state.data);
        return( 
           
            <div>{this.state.loading || !this.state.data ? (
                <div>loading...</div>
            ) : (
                <QuestionContainer info= {this.state.data}></QuestionContainer>
            )}</div>
                
            
        )
    }
}

