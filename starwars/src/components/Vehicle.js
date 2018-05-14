import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Starship = props => {
    return (
        <Card className="container-fluid">     
                <CardBody className="mein-card row">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12"> {props.name} </CardTitle>
                    <CardSubtitle className="mein-card bold-card col-12"> Model: </CardSubtitle>
                    <CardSubtitle className=" col-12 mt-4"> {props.model} </CardSubtitle>
                    <CardText className="bold-card mein-card col-12 mt-4"> Manufacturer </CardText>
                    <CardText className="col-12 "> {props.manufacturer} </CardText>
                    <CardText className="bold-card mein-card col-12"> Cost in Credits: </CardText>
                    <CardText className="col-12 "> {props.cost_in_credits} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Length: </CardText>
                    <CardText className="col-12"> {props.length} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Max Atmosphering Speed </CardText>
                    <CardText className="col-12 "> {props.max_atmosphering_speed} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Crew: </CardText>
                    <CardText className="col-12 "> {props.crew} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Passengers: </CardText>
                    <CardText className=" col-12"> {props.passengers} </CardText>
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Cargo Capacity: </CardText>
                    <CardText className="col-12 "> {props.cargo_capacity} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Consumables: </CardText>
                    <CardText className=" col-12"> {props.consumables} </CardText>
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Vehicle Class: </CardText>
                    <CardText className=" col-12"> {props.vehicle_class} </CardText>
                    {props.pilots.map(pilot => {
                         return <CardText key={pilot} className="col-12 "> {pilot}</CardText>})}
                </CardBody>
            </Card>
    )
}

export default Starship