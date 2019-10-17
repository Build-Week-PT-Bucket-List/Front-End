import React, { useState, useEffect } from "react";
import axios from "axios";
// import BucketItemCard from "BucketItemCard.js";

function BucketListGrid(props) {
  const [bucketList, setBucketList] = useState({items: [1, 2, 3 ,4 , 5]});

  useEffect(() => {
    axios.get(`https://bucket-list-be.herokuapp.com/`)
      .then(res => {
        console.log(res);
        setBucketList({items:[1, 2, 3, 4, 5]});
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
    {
      bucketList.items.map(item => {
        return <h1 key={item}>{item}</h1>
      })
    }
    </div>
  )
}

export default BucketListGrid;