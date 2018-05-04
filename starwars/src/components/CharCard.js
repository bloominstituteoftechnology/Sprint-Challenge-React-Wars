import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

const CharCard = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.char.name}</CardTitle>
                    <CardSubtitle>{props.char.birth_year}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default CharCard;