import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import BucketListGrid from './BucketListGrid.js';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
      axiosWithAuth()
        .get('user')
        .then(res => {
          console.log("User:", res);
          setCurrentUser(res.data.user);
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <h1>Hello, {currentUser.name}!</h1>
        <BucketListGrid uid={currentUser.id}/>
        </>
    )
}

export default Dashboard;