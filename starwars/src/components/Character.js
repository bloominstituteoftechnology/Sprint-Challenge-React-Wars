import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import "./StarWars.css";

export const Container = styled.div`
display: flex;
flex-flow: row wrap;
`;

export default function Character() {
const [characterInfo, setCharacterInfo] = useState([]);
const [next, setNext] = useState('');
const [previous, setPrevious] = useState('');

useEffect(() =>{
axios
    .get('https://swapi.co/api/people')
    .then(response => {
        setCharacterInfo(response.data.results);
        setNext(response.data.next)
    })
    .catch(error => {
        console.log('Data was not returned', error)
    })
}, []);

const handleNext = () => {
    axios
        .get(`${next}`)
        .then(response => {
            setCharacterInfo(response.data.results);  
            setNext(response.data.next)        
            setPrevious(response.data.previous) 
        })
        .catch(error => {
            console.log('Data was not returned', error)
        })    
}

const handlePrevious = () => {
    axios
    .get(`${previous}`)
    .then(response => {
        setCharacterInfo(response.data.results);              
        setNext(response.data.next)        
        setPrevious(response.data.previous)       
    })
    .catch(error => {
        console.log('Data was not returned', error)
    })    
}
  
return (
    <>
        <Container>       
            {characterInfo.map(( item) => {                
                return <CharacterCard key = {item.index} name={item.name} birth_year={item.birth_year} gender={item.gender} height={item.height} mass={item.mass} ></CharacterCard>                
            })}            
        </Container>
        <div className="buttons">
            <button onClick={handleNext}>Next</button>
            {previous && previous.length!==0 ?
            <button onClick={handlePrevious}>Previous</button> :null }   
        </div> 
    </>
)
}

