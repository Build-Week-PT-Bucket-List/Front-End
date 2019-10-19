import React, {useState, useEffect} from 'react';
import {withFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';



const Container = styled.div`
border: .5px solid #454245;
width: 200px;
padding-bottom: 1%;
margin-left: 42%;
margin-top: 4%;
border-top: 30px solid #A5C3C6;
border-radius: 5%;
box-shadow: 5px 5px 5px black;
`
;

const AddItem = ({errors, touched, status}) => {
    console.log(status)
    const [newItem, setNewItem] = useState ([])
    

    useEffect(()=> {
        if(status) {
            setNewItem([...newItem, status])
        }
        }, [newItem, status])
   

return (
       <Container>
        
            <form>
            <div>
            <br></br>

            {touched.user && errors.user && <p className="error">{errors.user}</p>}
            <input 
                type ="text" 
                name = "user"
                placeholder ="User Name"
        
                />
    
            <div>
                <br></br>
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <input 
                type ="text" 
                name = "name"
                placeholder ="Bucket List Name"
               
            
                />
                </div>

            <div>
                <br></br>

            {touched.items && errors.items && <p className="error">{errors.items}</p>}  
            <textarea
                type ="text" 
                name = "items"
                placeholder ="List Items"
              
                />
                </div>

            </div>
            <br></br>
            <button type="submit">Add New Bucket List</button>
            <div>
            <button type= "button">
                Reset
            </button>
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
            user: values.user || '',
            name: values.name || '',
            item: values.item || '', 
        }
    }, 

    
    validationSchema: yup.object().shape ({
       user: yup.string().required('Please enter your name'),
        name: yup.string().required(),
        item: yup.string().required(),
    }),

    handleSubmit: (values, {setStatus}) => {

       axios.post('https://bw-pt-bucket-list.herokuapp.com/api', values)
       .then((res) => {
           console.log(res)
       })
       .catch((err) => {
           console.log('Error:', err)
       })
    }

}) (AddItem)