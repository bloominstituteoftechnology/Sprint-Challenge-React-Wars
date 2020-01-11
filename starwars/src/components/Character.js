import React from 'react'
import styled from 'styled-components'
//import CharList from './CharList'

const PeopleCard = styled.div`
background-color: #FDBB01;
font-size: 1rem;
border-radius: 15px;
height: 200px;
width: 250px;
dispplay: flex;


margin-top: 15px;

flex-direction: column;
align-items: center;
justify-content: space-between;

`;


const Character = props => {

return (

    <PeopleCard key= {props.id}>
        
        <h3>Character: {props.character_name}</h3>
        <h3>Birth year:{props.birth_year}</h3>
        <h3> Heigth: {props.hei} in meters</h3> 
    </PeopleCard>
)
}

export default Character;