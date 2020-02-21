import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
  background: white;
  color: black;
  width:80%;
  margin: auto;
  max-height: 300px;
  margin-botom: 20px;
`;

const Card = props => {
    console.log("Card js ", props)

    return(
        <CharCard>
        <div  key={props.index}>
        <h2>Character: {props.name}</h2>
        <h3>Gender: {props.gender}</h3>
    </div>
    </CharCard>
    )
    
}

export default Card;

