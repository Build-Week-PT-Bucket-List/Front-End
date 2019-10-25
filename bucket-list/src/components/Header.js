import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled.div`
    padding: 1%;
    background-color: #A5c3c6;
    border-bottom: 2px solid #454245;
    box-shadow: 5px 5px 5px black;
    `
    ;

    const StyledHeading = styled.h1`
    font-size:30px; 
    `
    ;

   
  
const Header = () => {
    return (
    <Container className ="header">
        <Link to={`../Apps.js`}>HOME</Link>
        <br></br>
        <Link to={'/dashboard/additemform'}>ADD NEW ITEM</Link>
        <br></br>
        <Link to={'/dashboard'}>DASHBOARD</Link>
        <StyledHeading>
        <h1><center>START LIVING YOUR BEST LIFE TODAY!</center></h1>
        </StyledHeading>
    </Container>
    );
}

export default Header; 