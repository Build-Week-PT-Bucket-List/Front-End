import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 3%;
    background-color: #A5c3c6;
    border: 1px solid #454245;
    box-shadow: 5px 5px 5px #A49989;
    `
    ;

    const StyledHeading = styled.h1`
    font-size:40px;
    padding-left:5%;
    `
    ;

    const StyledP = styled.p`
    padding-left:5%;
    font-size:20px;
    `
    ;
   

const Header = () => {
    return (
    <Container className ="header">
        <StyledHeading>
        <h1>BUCKETARR</h1>
        </StyledHeading>
        <StyledP>
        <p>Start living your life to the fullest now!</p>
        </StyledP>
    </Container>
    );
}

export default Header; 