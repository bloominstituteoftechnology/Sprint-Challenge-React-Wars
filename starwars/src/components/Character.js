import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import {Row, Col} from 'reactstrap' 



const Character = () => {
    const [character, setCharacter] = useState ([])
        
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
            console.log(res.data.results)
            setCharacter(res.data.results)
        })
        .catch(err => console.log('No Info for You', err));
    }, [])
    return (
        <Row>
            {character.map((info) => {
                return(
                <Col lg='4' key={info.id}>
                    <CharacterCard name={info.name} species={info.species} status={info.status} image={info.image} />
                </Col>
           ) })}
        </Row>
    )
}

export default Character
