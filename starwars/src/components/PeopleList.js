import React from 'react';
import './StarWars.css';

import { Card, CardTitle, CardSubtitle, CardText, CardBody, Badge, CardImg, CardImgOverlay } from 'reactstrap';

const PeopleList = props => {
    return (
        <div>
            {props.starwarsChars.map(person => (
                <Card width='50%'>
                    <CardTitle>
                        {person.name}
                    </CardTitle>
                    <CardText>
                        DOB: {person.birth_year}<br/>
                        Mass: {person.mass}<br/>
                        Height: {person.height}<br/>
                        Gender: {person.gender}<br/>
                    </CardText>
                </Card>
            ))}
        </div>
    )
};

export default PeopleList;