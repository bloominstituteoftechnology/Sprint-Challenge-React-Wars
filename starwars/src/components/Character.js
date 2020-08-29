import React from 'react'
import styled from 'styled-components'
//import CharList from './CharList'



const Allcards = styled.div`
display: flex;
flex-wrap: wrap;
margin: 20px;
`;
const PeopleCard = styled.div`
background-color: #FDBB01;
font-size: 1rem;
border-radius: 15px;
height: 150px;
width: 250px;
padding-top: 10px:

margin: 5px;



justify-content: space-between;

`;

const AllH = styled.h3`
color: white;
`;



const Character = props => {

return (
    <Allcards>
    <PeopleCard key= {props.id}>
        
        <AllH>Character: {props.character_name}</AllH>
        <h3>Birth year: {props.birth_year}</h3>
        <h3> Heigth: {props.hei} in meters</h3> 
    </PeopleCard>
    </Allcards>
)
}

export default Character;