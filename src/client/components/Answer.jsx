import React, { Component } from 'react';

export class Answer extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <button className={this.props.correct.toString() + ' ' +  "answer"} onClick={this.props.handleClick}>{this.props.text}</button>
        );
    }
}
