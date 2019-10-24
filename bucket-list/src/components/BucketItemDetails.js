import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './detail-components/Post.js';
import BucketUpdate from './components/BucketUpdate'


function BucketItemDetails(props) {
  const [posts, setPosts] = useState([{id:1, title:"One"},{id:2, title: "Two"}]);

  useEffect(() => {
    axios.get(`https://bw-pt-bucket-list.herokuapp.com/api/item/${props.itemID}/posts`)
      .then(res => {
        console.log(res);
        setPosts(res.data.posts);
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
      <BucketUpdate itemID = {props.itemID} />
  </div>
  )
}

export default BucketItemDetails;