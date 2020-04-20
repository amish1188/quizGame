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
   
    componentDidMount() {
        fetch("/api/quizesapi")
            .then(res => res.json())
            .then(json => {this.setState({data: json, loading:false})
                }
            )
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
                <div>{this.state.loading? <div>loading</div> : <div>loaded</div>}</div>
                //<QuestionContainer info= {this.state.data}></QuestionContainer>
            
        )
    }
}

