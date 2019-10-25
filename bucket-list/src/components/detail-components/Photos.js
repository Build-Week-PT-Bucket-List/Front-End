import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
import styled from 'styled-components';

const ImgGrid = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`
const ImgCard = styled.img`
  width: 30%;
`
function Photos(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`item/post/${props.postID}/images`)
      .then(res => {
        setImages(res.data.images);
      })
      .catch(err => console.log(err))
  }, [props.postID]);

  return (
    <ImgGrid className="post-images">
      {
        images.map(image => {
          return <ImgCard key={image.id} className="post-img" src={image.url} alt={image.title} />
        })
      }
    </ImgGrid>  )
}
export default Photos;