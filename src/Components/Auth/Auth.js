import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';
import axios from 'axios';

class Auth extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    handleInput=(event)=>{
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister=()=>{
        const {username, password} = this.state;
        console.log(`${username}, ${password}`)
        axios
            .post('/api/register', {username, password})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
    }

    handleLogin=()=>{
        const {username, password} = this.state;
        console.log(`${username}, ${password}`)
        axios
            .post('/api/login', {username, password})
            .then(res => {
                this.props.getUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <input
                    maxLength='20'
                    placeholder='Enter Username'
                    name='username'
                    onChange={(event) => this.handleInput(event)}
                    />
                <input
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}
                    />
                <button
                    onClick={this.handleLogin}>
                    Login
                    </button>
                <button
                    // onClick={this.handleTest}
                    onClick={this.handleRegister}>
                    Register</button>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);