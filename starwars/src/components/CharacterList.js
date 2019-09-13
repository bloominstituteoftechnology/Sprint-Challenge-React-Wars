import React from "react";
import CharacterCard from "react"
// import styled from "styled-components"

const CharacterList = props => {
    const {character} = props; 
    console.log(characters);
   
    return (
        <>
        {
            characters.map(character => {
               return <CharacterCard character = {character}/> 
            })
        })
        </>
        )
    }

    export default CharacterList
