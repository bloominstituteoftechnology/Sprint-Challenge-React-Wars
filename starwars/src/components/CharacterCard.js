import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const CharacterCard = props => {
    
    return (

    <Grid.Column padded="horizontally" key={props.id}>
        <Card>
            <Card.Content>
                <Card.Header>Name: {props.name}</Card.Header>
                <Card.Description>
                <Card.Meta>{props.birthyear}</Card.Meta>
                Height: {props.height}cm.
                </Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>

    );
};

export default CharacterCard;