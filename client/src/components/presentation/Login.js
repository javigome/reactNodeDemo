import React, { Component } from 'react';
import { submitLogin } from '../../actions/authActions';
import { connect } from 'react-redux';

class Login extends Component{

    constructor(){
        super();

        this.state = {
            details: {}
        };

        this.updateDetails = this.updateDetails.bind(this);
        this.login = this.login.bind(this);

    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    login(){
        this.props.dispatch(submitLogin(this.state.details));
    }
    render(){
        return (
            <div>
                <h3>Login</h3>
                Username <input onChange={this.updateDetails} id="username" type="text" placeholder= "Username"/><br/>
                Password <input onChange={this.updateDetails} id="password" type="password" placeholder= "Password"/><br/>
                <button onClick={this.login}>Go</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}

}

export default connect(mapStateToProps)(Login);
