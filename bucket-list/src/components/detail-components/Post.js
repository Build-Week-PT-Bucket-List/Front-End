import React from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

import Photos from './Photos.js';
// import Memos from './detail-components';
// import Videos from './detail-components';

function Post(props) {
  const post = props.post;

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <Photos postID={post.id}/>
    </div>
  )
}

export default Post;