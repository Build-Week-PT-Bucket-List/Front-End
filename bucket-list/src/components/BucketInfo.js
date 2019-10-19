import React, { useEffect, useState } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import BucketItemCard from './BucketItemCard';


const BucketInfo = () => {
    const [items, setItems] = useState([])
  
    useEffect(() => {

      axiosWithAuth ()
        .get('/item')
        .then(res => {
          console.log('item data:', res.data.results);
          setItems(res.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

 if (!items) {
    return <div>Loading Bucket List information...</div>;
  }

    return (
      <div>
        <BucketItemCard itemData={items} />
      </div>
    );
}

export default BucketInfo 
  