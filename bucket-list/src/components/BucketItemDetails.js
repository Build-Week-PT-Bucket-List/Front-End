import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import Post from './detail-components/Post.js';

function BucketItemDetails(props) {
  const [posts, setPosts] = useState([{id:1, title:"One"},{id:2, title: "Two"}]);

  useEffect(() => {
    axios.get(`https://bw-pt-bucket-list.herokuapp.com/api/item/${props.itemID}/posts`)
      .then(res => {
        console.log(res);
        setPosts([{id:1, title:"One"},{id:2, title: "Two"}]);
      })
      .catch(err => console.log(err))
  }, [props.itemID]);

  return (
    <div className="details">
      <h2>Details</h2>
      <section className="posts">
        {
          posts.map(post => <Post key={post.id} post={post} />)
        }
      </section>
  </div>
  )
}

export default BucketItemDetails;