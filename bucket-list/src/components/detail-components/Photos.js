import React, { useState, useEffect } from 'react'
import axios from 'axios';
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
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        console.log(res);
        setImages(res.data.slice(0, 3));
      })
      .catch(err => console.log(err))
  }, []);

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