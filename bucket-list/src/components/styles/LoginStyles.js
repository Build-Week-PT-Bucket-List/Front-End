import styled from 'styled-components';

const Wrapper = styled.div`
    background: #a5c3c6;
    display: flex;
    width: 30%;
    align-items: center;
    margin: 0 auto;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;
`;

const Input = styled.input`
    width: 80%;
    padding: 4px;
    margin: 10px;
    border: none;
    border-bottom: 2px solid #a5c3c6;
    color: #454245;
    font-size: 1.2rem;
    text-align: center;
`;

const Button = styled.button`
    padding: 5px;
    color: #e3e2e0;
    border-radius: 8px;
    border: 2px solid #e3e2e0;

    margin: 10px;
    height: 35px;
    display: flex;
    align-items: baseline;
    background-color: #454245;
    
    &:hover{
        background: #a5c3c6;
    }
`;

export {
    Wrapper,
    Form,
    Input,
    Button,
}