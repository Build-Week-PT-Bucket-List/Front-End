import React, { useState, useEffect } from 'react';
import Header from './Header';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import AddItemForm from './AddItemForm';
import BucketListGrid from './BucketListGrid';
import BucketItemDetails from './BucketItemDetails';
import styled from 'styled-components';
import {Route} from 'react-router-dom';



const Container = styled.div`
  background-color: #A49989;
  `
  ;

const StyledHeading = styled.h1`
  font-size:20px;
  padding-left: 25%;
  `
  ;

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
          <br></br>
          <StyledHeading>
            <h1>Welcome to your Bucket List, {currentUser.name}!</h1>
          </StyledHeading>
        </Container>
        
        <Route exact path = "/dashboard" render={props=><BucketListGrid {...props}uid={currentUser.id}/>}/>
        <Route path = "/dashboard/details/:id" component = {BucketItemDetails} />
        <Route path = "/dashboard/additemform" render={props=><AddItemForm {...props}currentUser = {currentUser}/>}/>
        </>

    )
}

export default Dashboard;