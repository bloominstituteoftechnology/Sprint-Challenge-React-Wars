import React from "react";
import styled from "styled-components"

const Button = styled.button`
padding:6px 10px;
margin: 5px;
border: none;
border-radius:3px;
color: blue;
background-color:white;`

const CharacterCard = props => {
    return(
        <div className = "characters" key={props.key}>
            <Button>Character:{props.name}</Button>
                               

        </div>
    );
};
export default CharacterCard;