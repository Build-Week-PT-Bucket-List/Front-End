import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { withRouter } from 'react-router-dom';
import hike from '../images/hike1.jpg';
import { Wrapper, Form, Input, Button, Image } from './styles/RegisterStyles.js';

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
            <Wrapper>
               
                <Form onSubmit = {this.login}>
                    <Input
                    type = 'text'
                    name = 'name'
                    value = {this.state.credentials.name}
                    onChange = {this.handleChange}
                    placeholder = 'name'
                    />

                    <Input
                    type = 'email'
                    name = 'email'
                    value = {this.state.credentials.email}
                    onChange = {this.handleChange}
                    placeholder = 'email'
                    />

                    <Input
                    type = 'password'
                    name = 'password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange}
                    placeholder = 'password'
                    />
                    <Button type="submit">Register</Button>
                </Form>
                <Image src={hike} alt="person standing atop a cliff, overlooking a river below"></Image>
            </Wrapper>
        );
    }
}

export default withRouter(RegisterForm);