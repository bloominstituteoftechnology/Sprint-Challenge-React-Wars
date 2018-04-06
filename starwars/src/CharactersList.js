import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap';

const CharactersList = props => {
    return (
        <div className="Character-Wrapper">
            {props.starwarsChars.map((starwarsChar, index) => {
                <Card>
                    <CardBody key={starwarsChar.id}>
                        <CardTitle>{starwarsChar.name}</CardTitle>
                        <CardSubtitle>Birth year: {starwarsChar.birth_year}</CardSubtitle>
                    </CardBody>
                </Card>
            })}
        </div>
    );
};

export default CharactersList;