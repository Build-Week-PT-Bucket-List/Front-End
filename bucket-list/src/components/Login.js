import React from 'react';
import RegisterForm from './Register.js';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import europe from '../images/europe.jpg';
import { Wrapper, Form, Input, Button, Image } from './styles/LoginStyles.js';

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
                console.log('hello',res.data)
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>
            <Wrapper>
                <Image src={europe} alt="european cliffside village on the sea"></Image>
            
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
            </Wrapper>
            <RegisterForm />
            </>
        )
    }
}

export default Login;