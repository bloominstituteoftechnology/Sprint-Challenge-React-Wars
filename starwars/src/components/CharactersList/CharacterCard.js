import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

export default function(props) {
    const [character] = useState(props.character);
    const [homeWorld, setHomeWorld] = useState('');

    useEffect(() => {
        axios.get(character.homeworld)
            .then(res => setHomeWorld(res.data.name))
    }, []);

    return(
        <Card style={{margin: '2rem'}}>
            <Card.Content>
                <Card.Header>{character.name}</Card.Header>
                <Card.Meta>Height: {character.height}</Card.Meta>
                <Card.Meta>Weight: {character.mass}</Card.Meta>
                <Card.Description>This character appears in {character.films.length} Star Wars films. Originating from {homeWorld} in {character.birth_year}, {character.name} is awesome!</Card.Description>
            </Card.Content>
        </Card>
    )
}