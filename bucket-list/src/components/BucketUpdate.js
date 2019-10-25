import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


const initialItem = {

};

const BucketUpdate = ({ posts, setPosts }) => {
    const [editing, setEditing] = useState(false);
    const [postToEdit, setPostToEdit] = useState(initialItem);

    const editPost = post => {
        setEditing(true);
        setPostToEdit(post);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`/item/post/${postToEdit.id}`, postToEdit)
        .then(res => {
            setPosts(
                posts.map(post => {
                    if (post.id === postToEdit.id) {
                        return postToEdit;
                    } else return post;
                })
            )
        })
        .catch(err => console.log(err))
    };

    const deletePost = post => {
        axiosWithAuth()
        .delete(`/item/post/${post.id}`)
        .then(res => {
            setPosts(posts.filter(data => data.id !== post.id));
        })
        .catch(err => console.log(err));
    };

         return (
            <>
            {posts.map(post => (
                <div key={post.id} onClick={() => editPost(post)}>
                    <button onClick={() => deletePost(post)}>delete post</button>
                </div>
            ))}
            {editing && (
                <form onSubmit={saveEdit}>
                    <legend>edit post</legend>
                    <label>
                        post:
                        <input
                        value={postToEdit}
                        onChange={e => setPostToEdit({ ...postToEdit, post: e.target.value})}
                        />
                    </label>
                    <button type="submit">save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                </form>
            )}
            </>
       );
    };
    
    export default BucketUpdate;