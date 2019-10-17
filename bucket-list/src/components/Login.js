import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

class Login extends React.Component {
    state = {
        credentials : {
            email: '',
            password: ''
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
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <form onSubmit={this.login}>

                    <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                    />

                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </>
        )
    }
}

export default Login;