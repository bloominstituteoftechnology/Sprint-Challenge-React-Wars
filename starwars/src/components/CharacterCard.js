import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import './CharacterCard.css';

const CharacterCard = props => {
    return (
        <div>
            <Card className="card">
                <CardBody>
                    <CardTitle>{`${props.char.name}, born in ${props.char.birth_year}`}</CardTitle>
                    <CardSubtitle>{`Created: ${props.char.created}`}</CardSubtitle>
                    <CardSubtitle>{`Edited: ${props.char.edited}`}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}


export default CharacterCard;