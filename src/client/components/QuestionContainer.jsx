import React, { Component } from 'react';
import {Answer} from "./Answer"

export class QuestionContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.choseAnswer = this.choseAnswer.bind(this)
    }

    checkIfDone() {
        if(this.state.counter ===3){
            return false
        }
        else {return true}
    }

    choseAnswer(e) {
        if(this.checkIfDone())
        {
            if(e.target.classList.contains('false')) {
                alert("false");
                this.setState({counter:  this.state.counter + 1});
            } else {
                alert("right!");
                this.setState({counter:  this.state.counter + 1});
            }
        } else {alert('Done')}
     }

    render() {
                
                let content;

                if(this.state.counter < 3) {
                    let answers = this.props.info[this.state.counter].answers
                    let getQuestionText = this.props.info[this.state.counter].question 
                    content = 
                    <div className="container">
                        <h4 className="question">{getQuestionText}</h4>
                        {answers.map(answer => {
                        return <Answer handleClick={this.choseAnswer} key={answer.id} text={answer.text} correct={answer.correct} ></Answer>
                        })}
                    </div>
                 }
                else {content = <div>Over</div>}


          return (
              <div>
                  {content}
              </div>
            )
    }
}

