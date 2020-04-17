// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const CharacterContainer = styled.div`
display:flex;
padding:30px;

`
const CharacterName = styled.div `
color:white;
padding:10px;

`

const CharacterCard = styled.div `
align-content:flex-start;;
width:70%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
background-color:blue;
border:5px solid black;
padding:20px;
`
const CharacterInfo = styled.div `
margin:10px;
color:white;
padding-left:20px;
`

const StarWarsData = props => { 
    const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    created,
    edited,
    url}=props.item;

    return (
        <div>
                <CharacterContainer>
                    <CharacterCard>
                        <CharacterName>Name: {name}</CharacterName>
                        <CharacterInfo>Height: {height}</CharacterInfo>
                        <CharacterInfo>Mass: {mass}</CharacterInfo>
                        <CharacterInfo>Hair Color: {hair_color}</CharacterInfo>
                        <CharacterInfo>Skin Color: {skin_color}</CharacterInfo>
                        <CharacterInfo>Eyes: {eye_color}</CharacterInfo>
                        <CharacterInfo>Birth Year: {birth_year}</CharacterInfo>
                        <CharacterInfo>Gender: {gender}</CharacterInfo>
                    </CharacterCard>
                </CharacterContainer>
        </div>
        
    )
}

console.log(StarWarsData)
export default StarWarsData;