import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Headbar extends Component {
    constructor(props){
        super(props);
    }
    
    doLogout = async () => {
        const url = "/api/logout";
        let response;

        try {
            response = await fetch(url, {method: "post"});
        } catch (err) {
            alert("Failed to connect to server:" + err);
            return;
        }

        if(response.status !== 204) {
            alert("Error when connecting to server: status code " + response.status);
            return;
        }

        this.props.updateLoggedInUser(null);
        this.props.history.push("/");
    }

    renderLoggedIn(userId) {
        return (
            <React.Fragment>
                <p>Welcome {userId}</p>
                <button onClick={this.doLogout}>Logout</button>
            </React.Fragment>
        )
    }

    renderNotLoggedIn() {
        return(
            <React.Fragment>
                <p>You are not logged in</p>
                <div>
                    <Link to="/login" tabIndex="0">Log in</Link>
                    <Link to="/signup" tabIndex="0">Sign up</Link>
                </div>
            </React.Fragment>
        )
    }


    render() {
        const userId = this.props.userId

        let content;
        if(!userId) {
            content = this.renderNotLoggedIn();
        } else {
            content = this.renderLoggedIn(userId);
        }
        return (
            <div className="header">
                <Link to={"/quizgame"} tabIndex="0">Quiz</Link>
                {content}
            </div>
        );
    }
}

export default withRouter(Headbar);