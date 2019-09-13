import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import styled from 'styled-components';


const Wrap = styled.div `

display: flex;
flex-wrap: wrap;
justify-content: center;
justify-content: space-between;
flex-direction: row;
margin-bottom: 1rem;
margin-right: 1rem;
margin-left: 1rem;
padding: 1rem;




`;


function Characters () {

    const [characterData, setCharacterData] = useState();

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
    
        .then(res => {
            setCharacterData(res.data.results)
        })
        .catch(err => console.log(err));
    
    },[])

    console.log(characterData)

    if (!characterData){
        return <h1>Loading...</h1>
    }else {
        return (

            
            <div>

                <Wrap>

                {characterData.map((character, index) => <CharacterCard character={character} key={index} />)}
            

                </Wrap>
            
            </div>
           
        );
    }

        
}


export default Characters