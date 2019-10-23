import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
    state = {
        credentials: {
            name: '',
            email: '',
            password: '',
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
        .post('/register', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/login')
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className = 'register-form'>

                <form onSubmit = {this.login}>
                    <input
                    type = 'text'
                    name = 'name'
                    value = {this.state.credentials.name}
                    onChange = {this.handleChange}
                    placeholder = 'name'
                    />

                    <input
                    type = 'email'
                    name = 'email'
                    value = {this.state.credentials.email}
                    onChange = {this.handleChange}
                    placeholder = 'email'
                    />

                    <input
                    type = 'password'
                    name = 'password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    placeholder = 'password'
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterForm);