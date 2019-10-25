import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


const initialItem = {

};

const BucketUpdate = ({ attrs, updateAttr }) => {
    const [editing, setEditing] = useState(false);
    const [attrToEdit, setAttrToEdit] = useState(initialItem);

    const editAttr = attr => {
        setEditing(true);
        setAttrToEdit(attr);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`/attrs/${attrToEdit.id}`, attrToEdit)
        .then(res => {
            updateAttr(
                attrs.map(attr => {
                    if (attr.id === attrToEdit.id) {
                        return attrToEdit;
                    } else return attr;
                })
            )
        })
        .catch(err => console.log(err))
    };

    const deleteItem = attr => {
        axiosWithAuth()
        .delete(`/attrs/${attr.id}`)
        .then(res => {
            updateAttr(attrs.filter(data => data.id !== attr.id));
        })
        .catch(err => console.log(err));
    };

         return (
            <>
            <div></div>
            </>
       );
    };
    
    export default BucketUpdate;