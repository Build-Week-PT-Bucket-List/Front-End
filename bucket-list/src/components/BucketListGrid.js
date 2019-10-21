import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import styled from 'styled-components';
import BucketItemCard from "./BucketItemCard.js";

const Grid = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
`

function BucketListGrid(props) {
  const [items, setItems] = useState([{
        "id": 1,
        "user_id": 1,
        "completed": false,
        "description": "Drive a Ferrari",
        "created": "2019-06-28T15:52:58.870Z"
      }]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/posts`)
      .then(res => {
        console.log("BucketListGrid");
        // setItems(res.data);
        setItems(res.data);
      })
      .catch(err => console.log(err))
  }, [props.uid])

  return (
    <Grid>
      {
        items.map(item => <BucketItemCard key={item.id} item={item}/>)
      }
    </Grid>
  )
}

export default BucketListGrid;