import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
// import styled from 'styled-components';

function Video(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`item/post/${props.postID}/videos`)
      .then(res => {
        console.log("videos:", res);
        setVideos(res.data.images);
      })
      .catch(err => console.log(err))
  }, [props.postID])

  return (
    <ul>
      {
        videos.map(video => {
          return (
            <a href={video.video} key={video.id}><li>{video.video}</li></a>
          )
        })
      }
    </ul>
  )
}
export default Video;