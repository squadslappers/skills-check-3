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
        // console.log(`${username}, ${password}`)
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
            <div id = 'auth-box'>
                <p id='helo'>HELO</p>
                <div className = 'hi'>
                    <p>Username:</p>
                    <input
                        maxLength='20'
                        placeholder='Enter Username'
                        name='username'
                        onChange={(event) => this.handleInput(event)}
                        />
                </div>
                <div className = 'hi'>
                    <p>Password:</p>
                    <input
                        maxLength='20'
                        placeholder='Enter Password'
                        name='password'
                        onChange={(event) => this.handleInput(event)}
                        />
                </div>
                <div id='buttons'>
                    <button
                        className='button'
                        onClick={this.handleLogin}>
                        Login
                        </button>
                    <button
                        className='button'
                        // onClick={this.handleTest}
                        onClick={this.handleRegister}>
                        Register</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {getUser})(Auth);