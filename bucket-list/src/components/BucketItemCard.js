import React from 'react';
import styled from 'styled-components';

const WrapperDiv= styled.div`
  width: 40%;
  height: 30%;
  margin-left: 22%;
  border: 1.5px solid grey;
  padding: 3%;
  padding-left: 15%;
  margin-bottom:2%;
  font-family: The Wild Hammers;
  background-color: lightgrey;
  box-shadow: 5px 5px 5px black;
  `;

const BucketItemCard = (props) => {
    const itemData = props.itemData;


    return (
        <>
        {itemData.map(item => {
            return (
            <WrapperDiv className="cards">
                <h1>User:{item.user}</h1>
                <h2>BucketList: {item.name}</h2>
                <h2>Items {item.items}</h2>
            </WrapperDiv>
            );
        })},

        </>
    );
};
 export default BucketItemCard