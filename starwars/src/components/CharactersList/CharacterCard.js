import React from 'react';
import { Card } from 'semantic-ui-react';

export default function(props) {
    const character = props.character;

    return(
        <Card style={{margin: '2rem'}}>
            <Card.Content>
                <Card.Header>{character.name}</Card.Header>
                <Card.Meta>{character.homeworld}</Card.Meta>
                <Card.Description>A {character.species} weighing {character.mass}</Card.Description>
            </Card.Content>
        </Card>
    )
}