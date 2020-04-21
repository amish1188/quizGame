import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class SignUp extends Component {
    state = {  }
    render() {
        return (
            <Link to={'/home'}>
                    Sign Up
                </Link>
        );
    }
}
