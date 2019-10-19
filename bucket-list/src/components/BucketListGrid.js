import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import BucketItemCard from "BucketItemCard.js";

const Grid = styled.section`
  display: flex;
  flex-flow: row wrap;
`

function BucketListGrid(props) {
  const [bucketList, setBucketList] = useState({items: [1, 2, 3, 4, 5]});

  useEffect(() => {
    axios.get(`https://bw-pt-bucket-list.herokuapp.com/api/user/${props.uid}/items`)
      .then(res => {
        console.log(res);
        setBucketList({items: [1, 2, 3, 4, 5 ,6 ,7]});
      })
      .catch(err => console.log(err))
  }, [props.uid])

  return (
    <Grid>
      {
        bucketList.items.map(item => {
          // return <BucketItemCard key={item.id} item={item} />
          return <h1 key={item}>{item}</h1>
        })
      }
    </Grid>
  )
}

export default BucketListGrid;