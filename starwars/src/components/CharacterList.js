import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import {Container, Row} from 'reactstrap';


export default function CharacterList(props) {
    const [card, setCard] = useState(['']);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {setCard(response.data.results);
            })
            .catch(error => console.log(error)
            )
    }, []);

    return(
        <Container>
            <Row>
            {card.map(card => {
            return (
                <CharacterCard key={card}
                />
            );
        })}
            </Row>
        </Container>
    ) 
}