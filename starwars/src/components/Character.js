// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Sanchez = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
margin: auto 0
width: 100%;
`
const StyledDiv = styled.div`
width: 20em;
border: 2px solid black;
border-radius: 10px;
margin: 2vh 2vh;
background-color: grey;
`
const StyledImg = styled.img`
border: 1px solid red;
width: 200px;
height: 275px;
margin: 2vh;
box-shadow: 0 10px 20px 2px;
`

const CharacterComp = (props) => {
    return (
        <Sanchez>
            {props.characterData.map(character => {
                return (
                    <StyledDiv key={character.id}>
                        <h2>{character.name}</h2>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <p>{character.type}</p>
                        <p>{character.gender}</p>

                        <StyledImg alt={character.name} src={character.image} />
                    </StyledDiv>
                )
            })}
        // </Sanchez>
    )
}

export default CharacterComp