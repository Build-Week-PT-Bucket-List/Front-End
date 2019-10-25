import React from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

import Photos from './Photos.js';
import Memos from './Memos.js';
import Videos from './Videos.js';

function Post(props) {
  const post = props.post;

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Photos postID={post.id}/>
      <Memos postID={post.id}/>
      <Videos postID={post.id}/>
    </div>
  )
}

export default Post;