import React, { Component } from 'react';

class Answer extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.text);
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default Answer;