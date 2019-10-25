import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';


const initialItem = {

};

const BucketUpdate = ({ itemID, setItems }) => {
    // const [editing, setEditing] = useState(false);
    // const [attrToEdit, setAttrToEdit] = useState(initialItem);

    // const editAttr = attr => {
    //     setEditing(true);
    //     setAttrToEdit(attr);
    // };

    // const saveEdit = e => {
    //     e.preventDefault();

    //     axiosWithAuth()
    //     .put(`/attrs/${attrToEdit.id}`, attrToEdit)
    //     .then(res => {
    //         setItems(
    //             attrs.map(attr => {
    //                 if (itemID === attrToEdit.id) {
    //                     return attrToEdit;
    //                 } else return attr;
    //             })
    //         )
    //     })
    //     .catch(err => console.log(err))
    // };

    // const deleteItem = item => {
    //     axiosWithAuth()
    //     .delete(`/item/${itemID}`)
    //     .then(res => {
    //         setItems(items.filter(data => data.id !== itemID));
    //     })
    //     .catch(err => console.log(err));
    // };

         return (
            <>
            <div></div>
            </>
       );
    };
    
    export default BucketUpdate;