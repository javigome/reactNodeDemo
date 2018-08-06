import React, { Component} from 'react';
import { submitRegister } from '../../actions/authActions';
import { connect } from 'react-redux';

class Register extends Component{

    constructor(){
        super();

        this.state = {
            details: {}
        };
        this.updateDetails = this.updateDetails.bind(this);
        this.register = this.register.bind(this);
    }

    updateDetails(event){
        let updateDetails  = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    register(){
        this.props.dispatch(submitRegister(this.state.details));
    }

    render(){

        return(
            <div>
                <h3>Register</h3>
                Username <input onChange={this.updateDetails} id="username" type="text" placeholder= "Username"/><br/>
                Password <input onChange={this.updateDetails.bind(this)} id="password" type="password" placeholder= "Password"/><br/>

                <button onClick={this.register}>Go</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps)(Register);