import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

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
        console.log('hello')
        }
        }, [status])
   
        console.log(currentUser.id)
        return (
            <Container>
        
            <Form>
            <div>
            <br></br>
            {touched.description && errors.description && <p className="error">{errors.description}</p>}
            <Field 
            component = 'input'
                type ="text" 
                name = "description"
                placeholder ="Bucket List Description"
               />
            </div>
          

            <div>
            <br></br>
            {touched.message && errors.message && <p className="error">{errors.message}</p>}  
            <Field
            component='textArea'
                type ="text" 
                name = "message"
                placeholder ="Bucket List Message"
                />
            </div>

            <div>
            <br></br>
            {touched.photo && errors.photo && <p className="error">{errors.photo}</p>}  
            <Field
            component='textArea'
                type = "url"
                name = "photo"
                placeholder ="Bucket List Image(s)"
                />
            </div>

            <div>
            <br></br>
            {touched.video && errors.video && <p className="error">{errors.video}</p>}  
            <Field
            component='textArea'
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
       </Form>
       </Container>
   );
};

export default withFormik ({
    mapPropsToValues: (values) => {
        return {
            description: values.description || '',
            message: values.message || '', 
            photo: values.photo || '',
            video: values.video || ''
        }
    }, 

    
    validationSchema: yup.object().shape ({
        description: yup.string().required(),
        message: yup.string().required(),
        photo: yup.string(),
        video: yup.string(),

    }),


    handleSubmit: (values, {setStatus, props, resetForm}) => {

        const itemObject = {
            "user_id": props.currentUser.id,
			"completed": false,
			"description": values.description
        }
        axiosWithAuth().post('/item', itemObject )
        .then ((item) => {
            console.log(item)
            const postObject = {
                "item_id": item.data.id,
				"message": values.message
		    }
            axiosWithAuth().post('/item/post', postObject)
            .then((post) => {
             const imageObject = {
                 
				"post_id": post.data.id,
				"photo": values.photo
             }  
             axiosWithAuth().post('/item/post/image', imageObject)
             .then((res) => {
                 console.log(res)
             })
             .catch((err) => {
                 console.log('Error:', err)
             })
             const videoObject ={ 
                "post_id": post.data.id,
				"video": values.video
             }
             axiosWithAuth().post('/item/post/video', videoObject)
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
            props.history.push('/dashboard')
     
        })
        .catch(err=>console.log(err))
       resetForm()
    },
}) (AddItemForm)