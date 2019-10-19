import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid red;
    align-items: center;
    margin: 10px auto;
`

const Input = styled.input`
    width: 80%;
    padding: 4px;
    margin: 10px;
    border: none;
    border-bottom: 2px solid #a5c3c6;
    color: #454245;
    font-size: 1.2rem;
    text-align: center;
`

const Button = styled.button`
    width: 80%;
    font-size: 1rem;
    margin: 10px;
    padding: 4px;
    border: none;
    font-size: 1.2rem;
    background: #dfcdc4;

    &:hover{
        background: #a5c3c6;
    }
`
// .btn-grad {background-image: linear-gradient(to right, #a49989 0%, #d2cdc4 51%, #a49989 100%)}
// .btn-grad:hover { background-position: right center; }
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