import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import AddItemForm from './components/AddItemForm';
import BucketListGrid from './components/BucketListGrid';


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
        <h1>Hello, {currentUser.name}!</h1>
        <AddItemForm />
        <BucketListGrid uid={currentUser.id}/>
        </>
    )
}

export default Dashboard;