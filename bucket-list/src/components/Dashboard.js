import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import BucketListGrid from './BucketListGrid.js';

const Dashboard = () => {
    const [uid, setUid] = useState();
    useEffect(() => {
      axiosWithAuth()
        .get('user')
        .then(res => {
          console.log("User:", res);
          setUid(res.data.user.id);
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        <h1>Hello, World!</h1>
        <BucketListGrid uid={uid}/>
        </>
    )
}

export default Dashboard;