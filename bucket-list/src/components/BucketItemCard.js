import React from 'react';



const BucketItemCard = (props) => {
    const itemData = props.itemData;


    return (
        <>
        {itemData.map(item => {
            return (
            <div>
                <h1>User:{item.user}</h1>
                <h2>BucketList: {item.name}</h2>
                <h2>Items {item.items}</h2>
                </div>
            );
        })},
        </>
    );
};
 export default BucketItemCard