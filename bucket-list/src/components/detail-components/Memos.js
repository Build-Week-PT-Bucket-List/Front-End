import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth.js';
import styled from 'styled-components';

function Memo(props) {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`item/post/${props.postID}/voices`)
      .then(res => setVideos(res.data["voice_memo"]))
      .catch(err => console.log(err))
  }, [])

  return (
    <ul>
      {
        memos.map(memo => {
          <li><a href={memo.url}>{memo.url}</a></li>
        })
      }
      
    </ul>
      }
  )
}
export default Memo;