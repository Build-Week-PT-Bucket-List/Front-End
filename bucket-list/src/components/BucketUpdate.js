import React, {useState} from 'react';
import styled from 'styled-components';
import BucketInfo from './BucketInfo';

const Container = styled.div`
width: 200px;
padding-top:2%;
padding-bottom: 1%;
margin-left: 42%;
margin-top: 4%;
border: .5px solid #454245;
border-top: 30px solid #A5C3C6;
border-radius: 5%;
box-shadow: 5px 5px 5px black;
`
;

const BucketUpdate = () => {
    const initialNote ={ note: ""};

    const [ newNote, setNewNote] = useState(initialNote);
    

    const handleTextChange = event => {
        setNewNote({
            ...newNote,
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newNote);

        resetForm(event);
    };

    const resetForm = event => {
        event.preventDefault();
        setNewNote(initialNote);
    }




         return (
           
            <Container>
            <BucketInfo />
             <form onSubmit ={handleSubmit}>
                <button type ="submit">Update Item</button>
                <button type ="submit">Delete Item</button>
        
             <div>
                <br></br>
                <textarea 
                type = "text"
                name ="notes" 
                placeholder ="Add Notes"
                onChange = {handleTextChange} 
                value = {newNote.notes}
                />
            </div>
                <button type ="submit">Save Notes</button>
           </form>

           <div>
                <button type ="button" onClick={resetForm}>
                 Reset
                 </button>
    
           </div>
           </Container>

       );
    };
    
    export default BucketUpdate;  

