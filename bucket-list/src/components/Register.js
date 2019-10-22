import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class RegisterForm extends React.compontent {
    state = {
        credentials: {
            username: '',
            passowrd: '',
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('auth/register', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/protected')
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className = 'register-form'>

                <form onSubmit = {this.login}>
                    <input
                    type = 'text'
                    name = 'username'
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange}
                    placeholder = 'password'
                    />

                    <input
                    type = 'password'
                    name = 'passowrd'
                    value = {this.state.credentials.passowrd}
                    onChange = {this.handleChange}
                    placeholder = 'password'
                    />
                    <button>Register</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;