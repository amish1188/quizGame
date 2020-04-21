import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = { 
            addClass: false 
        };

    }

    signUpClick() {
        this.setState({
            addClass: true
        });
    }

    signInClick() {
        this.setState({
            addClass: false
        });
    }


    render() {
        let containerClass = ["container"];
        if(this.state.addClass) {
            containerClass.push('right-panel-active')
        }
        return (
            <div>
                <div className={containerClass.join(' ')} id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" onClick = {this.signInClick.bind(this)} id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" onClick = {this.signUpClick.bind(this)} id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

