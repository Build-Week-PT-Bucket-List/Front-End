import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';
import Post from './detail-components/Post.js';
import BucketUpdate from './BucketUpdate.js';
import styled from 'styled-components';

const Box = styled.div`
background: #a5c3c6;
display: flex;
flex-direction: column;
width: 60%;
align-items: center;
margin: 20px auto;
padding: 10px;

@media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;

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
    <Box className="details">
      <h2 className="postDetails">{item.description} details</h2>
      
      <section className="posts">
        {/* {
           posts.map(post => <Post key={post.id} post={post} />)
        } */}
        <BucketUpdate posts={posts} setPosts={setPosts} />
      </section>
      
  </Box>
  )
}

export default BucketItemDetails;