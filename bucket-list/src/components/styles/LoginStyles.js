import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30%;

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

export {
    Form,
    Input,
    Button,
}