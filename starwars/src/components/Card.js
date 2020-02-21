import React from "react";
import styled from "styled-components";

const characterBlock = styled.div`
background: #99f3eb;
`;

const Card = props => {
    console.log("Card js ", props)

    return(
        <characterBlock>
        <div  key={props.index}>
        <h2>Character: {props.name}</h2>
        <h3>Gender: {props.gender}</h3>
    </div>
    </characterBlock>
    )
    
}

export default Card;

