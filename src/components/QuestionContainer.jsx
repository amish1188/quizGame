import React, { Component } from 'react';
import quizzes from "../quiz";
import Answer from "./Answer"

class QuestionContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.choseAnswer = this.choseAnswer.bind(this)
    }


    choseAnswer(e) {
        if(e.target.className === 'false') {
            alert("false");
            this.setState({counter:  this.state.counter + 1});
        } else {
            alert("right!");
            this.setState({counter:  this.state.counter + 1});
        }
     }

    render() {
          let answers = this.props.info[this.state.counter].answers
          let getQuestionText = this.props.info[this.state.counter].question
         
          return (
            
            <div>
                <h4>{getQuestionText}</h4>
                {answers.map(answer => {
                    return <Answer handleClick={this.choseAnswer} key={answer.id} text={answer.text} correct={answer.correct} ></Answer>
                })}
            </div>
            )
    }
}

export default QuestionContainer;