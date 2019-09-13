import React from "react";
import CharacterCard from "./CharacterCard";
// import styled from "styled-components"


const CharacterList = (props) => {
    const {characters} = props;
        console.log(props);
    
    return (
        <div>
        hello world
        {
            characters.map(character => {
               return <CharacterCard character = {character}/> 
            })
        }
        </div>
    );
}

export default CharacterList