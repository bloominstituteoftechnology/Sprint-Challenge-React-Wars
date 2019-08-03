import React from 'react';
import { Card } from 'semantic-ui-react';

export default function(props) {
    return(
        <Card>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.homeworld}</Card.Meta>
                <Card.Description>A {props.species} weighing {props.mass}</Card.Description>
            </Card.Content>
        </Card>
    )
}