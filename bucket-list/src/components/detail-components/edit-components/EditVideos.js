import React, {useState} from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth.js';


const initialVideo = {
    video: ''
};

const EditVideos = ({ videos, setVideos }) => {
    const [editing, setEditing] = useState(false);
    const [videoToEdit, setVideoToEdit] = useState(initialVideo);

    const editVideo = video => {
        setEditing(true);
        setVideoToEdit(video);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`/item/post/video/${videoToEdit.id}`, videoToEdit)
        .then(res => {
            setVideos(
                videos.map(video => {
                    if (video.id === videoToEdit.id) {
                        return videoToEdit;
                    } else return video;
                })
            )
        })
        .catch(err => console.log(err))
    };

    const deleteVideo = video => {
        axiosWithAuth()
        .delete(`/item/post/video/${video.id}`)
        .then(res => {
            setVideos(videos.filter(data => data.id !== video.id));
        })
        .catch(err => console.log(err));
    };

         return (
            <>
            {videos.map(video => (
                <div className="postEdit" key={video.id} onClick={() => editVideo(video)}>
                    <button className="videoButton">edit video</button>
                    <button className="videoButton" onClick={() => deleteVideo(video)}>delete video</button>
                </div>
            ))}
            {editing && (
                <form onSubmit={saveEdit}>
                    
                    <label>
                    video:
                        <input
                        value={videoToEdit.video}
                        onChange={e => setVideoToEdit({ ...videoToEdit, video: e.target.value})}
                        />
                    </label>
                    <button className="videoButton" type="submit">save</button>
                    <button className="videoButton" onClick={() => setEditing(false)}>cancel</button>
                </form>
            )}
            </>
       );
    };
    
export default EditVideos;