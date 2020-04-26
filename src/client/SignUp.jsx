import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state= {
            userId: "",
            password: "",
            errorMsg: null
        }
    }

    onUserIdChange = event => {
        this.setState({userId: event.target.value, errorMsg: null});
    }

    onPasswordChange = event => {
        this.setState({password: event.target.value, errorMsg:null});
    }

    doSignUp = async () => {
        
        const {userId, password} = this.state;
    
        const url= "/api/signup";
        const payload = {userId: userId, password: password};
        let response;

        try {
            response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch(err) {
            this.setState({errorMsg: "Failed to connect to server:" + err});
            alert(this.state.errorMsg)
            return;
        }

        if (response.status === 400) {
            this.setState({ errorMsg: "Invalid userId/password" });
            alert(this.state.errorMsg)
            return;
          }
      
          if (response.status !== 201) {
            this.setState({
              errorMsg:
                "Error when connecting to server: status code " + response.status
            });
            alert(this.state.errorMsg)      
            return;
          }

        this.setState({ errorMsg: null });
        await this.props.fetchAndUpdateUserInfo();
        this.props.history.push("/");
    }
    
    render() {
        let containerClass = ["container"];
        let error = <div></div>;
        if (this.state.errorMsg) {
            error = (
                <div className="errorMsg">
                <p>{this.state.errorMsg}</p>
                </div>
            );
        }

        return (

            <div >
            <div>
              <p>User Id:</p>
              <input
                type="text"
                value={this.state.userId}
                onChange={this.onUserIdChange}
              />
            </div>
            <div>
              <p>Password:</p>
              <input
                type="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </div>
            <div>
        
              
            </div>
    
            {error}
    
            <button className="button" onClick={this.doSignUp}>
              Sign Up
            </button>
          </div> 






             /*<div>
            <div className={containerClass.join(' ')} id="container">
                <div className="form-container sign-up-container">
                    <form method="get">
                        <h1>Create Account</h1>
                        <input  type="text" 
                                placeholder="Name" 
                                value={this.state.userId}
                                onChange={this.onUserIdChange}/>
                        <input  type="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onPasswordChange}/>

                                {error}

                        <button onClick={this.doSignUp}>Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us please login with your personal info
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>  */
        );
    }
}

export default withRouter(SignUp);
