import styled from 'styled-components';

const Wrapper = styled.div`
    background: #a5c3c6;
    display: flex;
    width: 60%;
    align-items: center;
    margin: 100px auto 0 auto;

    @media only screen and (max-width: 1024px) {
        width: 95%;
      }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
    align-items: center;
`;

const Input = styled.input`
    width: 80%;
    padding: 4px;
    margin: 10px;
    border: none;
    border-bottom: 3px solid #a49989;
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

const Image = styled.img`
    max-height: 300px;
    
    @media only screen and (max-width: 1100px) {
        display: none;
      }
`;

export {
    Wrapper,
    Form,
    Input,
    Button,
    Image
}