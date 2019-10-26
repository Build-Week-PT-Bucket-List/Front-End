import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';

import EditMemo from './edit-components/EditMemos.js';

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
      {/* {
        memos.map(memo => {
          return <li><a href={memo.url}>{memo.url}</a></li>
        })
      } */}
      <EditMemo memos={memos} setMemos={setMemos} />
    </ul>
  )
}
export default Memo;