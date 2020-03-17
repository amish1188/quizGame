import React, { Component } from 'react';
class Question extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <h1>{this.props.question}</h1>
        );
    }
}

export default Question;