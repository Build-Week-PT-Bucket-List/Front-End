import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import Post from './detail-components/Post.js';
import BucketUpdate from './BucketUpdate.js'


function BucketItemDetails(props) {
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axiosWithAuth()
      .get(`/item/${id}/`)
      .then(res => {
        console.log("item:", res);
        setItem(res.data.item);
      })
      .catch(err => console.log(err))
    axiosWithAuth()
      .get(`/item/${id}/posts`)
      .then(res => {
        console.log("posts:", res);
        setPosts(res.data.posts);
      })
      .catch(err => console.log(err))
  }, [props.match.params.id]);

  if (!item) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="details">
      <h2>{item.description} Details</h2>
      <section className="posts">
        {
          // posts.map(post => <Post key={post.id} post={post} />)
        }
        <BucketUpdate posts={posts} setPosts={setPosts} />
      </section>
      
  </div>
  )
}

export default BucketItemDetails;
