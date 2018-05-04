import React from 'react';
import { Card, CardText, CardBody } from 'reactstrap';

const Chars = ({ CharacterData }) => {
    return (
        <div >
            <Card>
                <CardBody>
                    <CardText>{CharacterData.name}</CardText>
                    <CardText>{CharacterData.height}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Chars;
