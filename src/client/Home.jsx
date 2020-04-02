import React, { Component } from 'react';
import {Link} from 'react-router-dom';



export class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Link to={'/quizgame'}>
                    Click me
                </Link>
            </div>
        );
    }
}

