import React, { useState, useEffect } from 'react';
import Header from './Header';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import AddItemForm from './AddItemForm';
import BucketListGrid from './BucketListGrid';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #A49989;
    `;


const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
      axiosWithAuth()
        .get('/user')
        .then(res => {
          console.log("User:", res);
          setCurrentUser(res.data.user);
        })
        .catch(err => console.log(err))
    }, [])

    if (!currentUser.name) {
      return (
        <h1>Loading User...</h1>
      )
    }
    
    return(
        <>
        <Header />
        <Container>
            <h1>Hello, {currentUser.name}!</h1>
            <AddItemForm currentUser = {currentUser}/>
            <BucketListGrid uid={currentUser.id}/>
        </Container>
        </>
    )
}

export default Dashboard;