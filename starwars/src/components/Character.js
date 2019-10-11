import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: row wrap;
`;

export default function Character() {
const [characterInfo, setCharacterInfo] = useState([]);

useEffect(() =>{
axios
.get('https://swapi.co/api/people')
.then(response => {
        setCharacterInfo(response.data.results)
})
.catch(error => {
    console.log('Data was not returned', error)
})
}, []);

return (
    <Container>
       
            {characterInfo.map(( item) => {
                return <CharacterCard key = {item.index} name={item.name} birth_year={item.birth_year} gender={item.gender} height={item.height} mass={item.mass} ></CharacterCard>
            })}
        
    </Container>
)

}

