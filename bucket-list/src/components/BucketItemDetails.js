import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import Post from './detail-components/Post.js';
import BucketUpdate from './BucketUpdate.js'


function BucketItemDetails(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(`/item/${id}/posts`)
      .then(res => {
        console.log("posts:", res);
        setPosts(res.data.posts);
      })
      .catch(err => console.log(err))
  }, [props.match.params.id]);

  return (
    <div className="details">
      <h2>Details</h2>
      <section className="posts">
        {/* {
          posts.map(post => <Post key={post.id} post={post} />)
        } */}
        <BucketUpdate posts={posts} setPosts={setPosts} />
      </section>
      
  </div>
  )
}

export default BucketItemDetails;
