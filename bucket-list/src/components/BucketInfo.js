import React, { useEffect, useState } from "react";
import axios from 'axios';
import BucketItemCard from './BucketItemCard';


const BucketInfo = (props) => {
    const [items, setItems] = useState([])
  
    useEffect(() => {

      axios
        .get('https://bw-pt-bucket-list.herokuapp.com/api')
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
  