import React, {useState} from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth.js';


const initialImage = {
    photo: ''
};

const EditPhotos = ({ images, setImages }) => {
    const [editing, setEditing] = useState(false);
    const [imageToEdit, setImageToEdit] = useState(initialImage);

    const editImage = image => {
        setEditing(true);
        setImageToEdit(image);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`/item/post/image/${imageToEdit.id}`, imageToEdit)
        .then(res => {
            setImages(
                images.map(image => {
                    if (image.id === imageToEdit.id) {
                        return imageToEdit;
                    } else return image;
                })
            )
        })
        .catch(err => console.log(err))
    };

    const deleteImage = image => {
        axiosWithAuth()
        .delete(`/item/post/image/${image.id}`)
        .then(res => {
            setImages(images.filter(data => data.id !== image.id));
        })
        .catch(err => console.log(err));
    };

         return (
            <>
            {images.map(image => (
                <div className="postEdit imageEdit" key={image.id} onClick={() => editImage(image)}>
                    <button> edit image</button>
                    
                    <button onClick={() => deleteImage(image)}>delete image</button>
                </div>
            ))}
            {editing && (
                <form onSubmit={saveEdit}>
                    
                    <label>
                    image url:
                        <input
                        value={imageToEdit.image}
                        onChange={e => setImageToEdit({ ...imageToEdit, image: e.target.value})}
                        />
                    </label>
                    <button type="submit">save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                </form>
            )}
            </>
       );
    };
    
export default EditPhotos;