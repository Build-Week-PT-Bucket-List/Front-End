import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    border: 1px solid red;
    align-items: center;
    margin: 10px auto;
`

const Input = styled.input`
    width: 10%;
    padding: 3px;
    
    margin: 10px;
`

const Button = styled.button`
    width: 10%;
    font-size: 1rem;
    margin: 10px;
`

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
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
                <Form onSubmit={this.login}>

                    <Input
                    type="text"
                    name="email"
                    placeholder="email"
                    autoComplete='email'
                    value={this.state.credentials.email}
                    onChange={this.handleChange}
                    />

                    <Input
                    type='password'
                    name='password'
                    placeholder='password'
                    autoComplete='current-password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />
                    <Button>Log In</Button>
                </Form>
            </>
        )
    }
}

export default Login;