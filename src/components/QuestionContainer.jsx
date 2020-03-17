import React, { Component } from 'react';
import quizzes from "../quiz";
import Answer from "./Answer"

class QuestionContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 2
        }
    }
    render() {
          let answers = this.props.info[this.state.counter].answers
        return (
            
            <div>
                <h4>{this.props.info[this.state.counter].question}</h4>
                {answers.map(answer => {
                    return <Answer key={answer.id} text={answer.text}></Answer>
                })}
            </div>
            )
    }
}

export default QuestionContainer;