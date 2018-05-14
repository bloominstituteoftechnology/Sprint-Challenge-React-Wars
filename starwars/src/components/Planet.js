import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Planet = props => {
    console.log('Planet props', props)
    return (

        <div className="container-fluid">        
            <Card className="mein-card"> 
                <CardBody className="row">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12"> {props.name} </CardTitle>
                    <CardSubtitle className="mein-card bold-card col-12"> Rotation Period: </CardSubtitle>
                    <CardSubtitle className="mt-2 col-12"> {props.rotation_period} </CardSubtitle>
                    <CardText className="bold-card mein-card col-12"> Orbital Period: </CardText>
                    <CardText className="col-12 mt-2"> {props.orbital_period} </CardText>
                    <CardText className="bold-card mein-card col-12"> Diameter: </CardText>
                    <CardText className="col-12 mt-2"> {props.diameter} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Climate: </CardText>
                    <CardText className="col-12"> {props.climate} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Terrain: </CardText>
                    <CardText className="col-12 mt-2"> {props.terrain} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Surface Water: </CardText>
                    <CardText className="col-12 mt-2"> {props.surface_water} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Population: </CardText>
                    <CardText className="mt-2 col-12"> {props.population} </CardText>
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Residents: </CardText>
                    {props.residents.map(resident => {
                        return <CardText key={resident} className="col-12 mt-2"> {resident}</CardText>})}
                </CardBody>
            </Card>
        </div>
    )
}

export default Planet