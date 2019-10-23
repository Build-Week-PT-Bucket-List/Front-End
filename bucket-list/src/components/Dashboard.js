import React from 'react';
import Header from './components/Header';
import AddItemForm from './components/AddItemForm';
import BucketListGrid from './components/BucketListGrid';

const Dashboard = () => {
   

        return(
            <>
            <Header />
            <AddItemForm />
            <BucketListGrid />
            </>
        );
        };
    

export default Dashboard;