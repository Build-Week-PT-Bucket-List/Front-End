import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth.js';
// import styled from 'styled-components';

function Video(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`item/post/${props.postID}/videos`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [props.postID])

  return (
    <ul>
      {
        videos.map(video => {
          return (
            <li><a href={video.url}>{video.url}</a></li>
          )
        })
      }
    </ul>
  )
}
export default Video;