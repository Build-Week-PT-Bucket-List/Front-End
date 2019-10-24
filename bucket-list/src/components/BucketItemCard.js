import React, { useState }  from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ItemCard = styled.div`
    margin-bottom: 10px;
    width: 30%;
    background-color: slategray;
`

const BucketItemCard = (itemData) => {
    const item = itemData.item;
    const [checked, setChecked] = useState(true);
    console.log('itemdata:',item);
    //TODO possible api call to get number of posts or other data?      

    const handleClick = (event) => {
        setChecked(!item.completed);
        item.completed = checked;
        console.log(item.completed)
    }
    // TODO set item.complete using hook or API?    

    return (
        <ItemCard>
            <h2>{item.description}</h2>
            <label>Complete:
                <input type="checkbox" defaultChecked={item.completed} name="complete" value="completed" onClick={handleClick}/>
            </label>
            <p>Posts: {item.id}</p>
            <Link to={`dashboard/details/${item.id}`}>Details</Link>
        </ItemCard>
    );
};

export default BucketItemCard