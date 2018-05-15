import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const UniqueSpecies = props => {
    return (
        <Card className="container-fluid">     
                <CardBody className="mein-card row">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12"> {props.name} </CardTitle>
                    <CardSubtitle className="mein-card bold-card col-12"> Classification: </CardSubtitle>
                    <CardSubtitle className="mt-4 col-12"> {props.classification} </CardSubtitle>
                    <CardText className="bold-card mein-card col-12 mt-2"> Designation: </CardText>
                    <CardText className="col-12 mt-2"> {props.designation} </CardText>
                    <CardText className="bold-card mein-card col-12"> Average Height: </CardText>
                    <CardText className="col-12 mt-2"> {props.average_height} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Skin colors: </CardText>
                    <CardText className="col-12"> {props.skin_colors} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Hair colors: </CardText>
                    <CardText className="col-12 mt-2"> {props.hair_colors} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Eye colors: </CardText>
                    <CardText className="col-12 mt-2"> {props.eye_colors} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Average lifespan: </CardText>
                    <CardText className="mt-2 col-12"> {props.average_lifespan} </CardText>
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Residents: </CardText>
                    {props.people.map(people => {
                         return <NavLink to={`/characters/${people.toLowerCase().split(' ').join('')}`} className="col-12 mt-2"><CardText key={people}>{people}</CardText> </NavLink>})}
                </CardBody>
            </Card>
    )
}

export default UniqueSpecies