import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
// import styled from 'styled-components';

function Memo(props) {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`item/post/${props.postID}/voices`)
      .then(res => {
        console.log("memos:", res);
        setMemos(res.data.images);
      })
      .catch(err => console.log(err))
  }, [props.postID])

  return (
    <ul>
      {
        memos.map(memo => {
          return <li><a href={memo.url}>{memo.url}</a></li>
        })
      }
    </ul>
  )
}
export default Memo;