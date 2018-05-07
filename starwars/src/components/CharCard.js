import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

const CharCard = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.char.name}</CardTitle>
                    <CardSubtitle>Birthdate: {props.char.birth_year}</CardSubtitle>
                    <Button >Expand</Button>
                </CardBody>
            </Card>
        </div>
    ); 
}
 
export default CharCard;