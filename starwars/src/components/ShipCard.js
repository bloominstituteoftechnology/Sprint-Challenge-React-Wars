import React from "react";
import styled from "styled-components";


const Card = styled.div`

    width: 200px;
    background: rgba(225,225,225, 0.7);
    padding: 4% 2%;
    border: 1px solid grey;
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    font-size: 2rem;
`; 

const shipPics = styled.img`

    width: 100px;
    height 100px;
`;

const ShipCard = props => {

  return (
    <Card>
      <h2>{props.name}</h2>
      <p>Model: {props.model}</p>
      <p>
        Made by: {props.manufacturer}
      </p>
      <p>Gender: Robot</p>
      <img src={props.url}/>
      
    </Card>
  );
};

export default ShipCard;