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
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/user/${props.uid}/items`)
      .then(res => {
        console.log("items:", res);
        setItems(res.data.items);
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