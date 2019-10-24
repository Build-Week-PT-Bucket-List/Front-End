import React, {useState, useEffect} from 'react';
import {withFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';



const Container = styled.div`
border: .5px solid #454245;
background-color: #454245;
width: 200px;
padding: 3%;
margin-left:20%;
margin-top: 4%;
border-top: 30px solid #A5C3C6;
border-radius: 5%;
box-shadow: 5px 5px 5px black;
`
;

const AddItemForm = ({errors, touched, status, currentUser}) => {
    console.log(status)
    const [newItem, setNewItem] = useState ([])
    

    useEffect(()=> {
        if(status) {
            setNewItem([...newItem, status])
        }
        }, [newItem, status])
   
console.log(currentUser.id)
return (
       <Container>
        
            <form>
            <div>
            <br></br>
            {touched.item && errors.item && <p className="error">{errors.item}</p>}
            <input 
                type ="text" 
                name = "item"
                placeholder ="Bucket List Description"
               />
            </div>
          

            <div>
            <br></br>
            {touched.post && errors.post && <p className="error">{errors.post}</p>}  
            <textarea
                type ="text" 
                name = "post"
                placeholder ="Bucket List Message"
                />
            </div>

            <div>
            <br></br>
            {touched.image && errors.image && <p className="error">{errors.image}</p>}  
            <textarea
                type = "url"
                name = "image"
                placeholder ="Bucket List Image(s)"
                />
            </div>

            <div>
            <br></br>
            {touched.video && errors.video && <p className="error">{errors.video}</p>}  
            <textarea
                type = "url"
                name = "video"
                placeholder ="Bucket List Video"
                />
            </div>

            <div>
            <br></br>
            <button type="submit">Add New Bucket List</button>
            </div>


            <div>
            <br></br>
            <button type= "button">Reset</button>
            </div>

            {newItem.map((newItem) => ( 
                    <div>Name: {newItem.name}</div>
                ))}
       </form>
       </Container>
   );
};

export default withFormik ({
    mapPropsToValues: (values) => {
        return {
            item: values.item || '',
            post: values.post || '', 
            image: values.image || '',
            video: values.video || ''
        }
    }, 

    
    validationSchema: yup.object().shape ({
        item: yup.string().required(),
        post: yup.string().required(),
    }),


    handleSubmit: (values, {setStatus, props}) => {
        const itemObject = {
            "user_id": props.currentUser.id,
			"completed": false,
			"description": values.description
        }
        axios.post('https://bw-pt-bucket-list.herokuapp.com/api/item', itemObject )
        .then ((item) => {
            const postObject = {
                "item_id": item.id,
				"message": values.message
		    }
            axios.post('https://bw-pt-bucket-list.herokuapp.com/api/item/post', postObject)
            .then((post) => {
             const imageObject = {
                 
				"post_id": post.id,
				"photo": values.photo
             }  
             axios.post('https://bw-pt-bucket-list.herokuapp.com/api/item/post/image', imageObject)
             .then((res) => {
                 console.log(res)
             })
             .catch((err) => {
                 console.log('Error:', err)
             })
             const videoObject ={ 
                "post_id": post.id,
				"video": values.video
             }
             axios.post('https://bw-pt-bucket-list.herokuapp.com/api/item/post/video', videoObject)
             .then((res) => {
                 console.log(res)
             })
             .catch((err) => {
                 console.log('Error:', err)
             })
            })
            .catch((err) => {
                console.log('Error:', err)
            })
     
        })
        .catch()
       
    },
}) (AddItemForm)