import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Montserrat;
    background-color: #A5c3c6;
    border: 1px solid #454245;
    box-shadow: 5px 5px 5px #A49989;
    `
    ;

const Header = () => {
    return (
    <Container className ="header">
        <h1>BUCKETARR</h1>
        <h2>Start living your life to the fullest now!</h2>
    </Container>
    );
}

export default Header; 