import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const StarWars = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{`Name : ${props.starWars.name}`}</CardTitle>
                    <CardBody >
                    <CardSubtitle>{`Gender : ${props.starWars.gender}`}</CardSubtitle>
                    <CardSubtitle>{`Birth-Year : ${props.starWars.birth_year}`}</CardSubtitle>
                    </CardBody >
                    <CardBody >
                    <CardText>{`Hair Color: ${props.starWars.hair_color}`}</CardText>
                    <CardText>{`Eye Color: ${props.starWars.eye_color}`}</CardText>
                    <CardText>{`Skin Color: ${props.starWars.skin_color}`}</CardText>
                   </CardBody>
                    <CardBody>
                    <CardText>{` Height:${props.starWars.height}`}</CardText>
                    <CardText>{`Mass: ${props.starWars.mass}`}</CardText>
                    </CardBody>
                </CardBody>
            </Card>
        </div>
    );
};

export default StarWars;