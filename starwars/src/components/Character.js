import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Character = props => {

    
    return (
        <div className="container-fluid mein-cards">
            <Card className="mein-card"> 
                <CardBody className="row">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12"> {props.name} </CardTitle>
                    <CardSubtitle className="mein-card bold-card col-12"> Birth year: </CardSubtitle>
                    <CardSubtitle className="mt-5 col-12"> {props.birth_year} </CardSubtitle>
                    <CardText className="bold-card mein-card col-12"> Eye color: </CardText>
                    <CardText className="col-12 mt-5"> {props.eye_color} </CardText>
                    <CardText className="bold-card mein-card col-12"> Hair color: </CardText>
                    <CardText className="col-12 mt-5"> {props.hair_color} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Height: </CardText>
                    <CardText className="col-12"> {props.height} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Mass: </CardText>
                    <CardText className="col-12 mt-5"> {props.mass} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Homeworld: </CardText>
                    <CardText className="col-12 mt-5"> {props.homeworld} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Films: </CardText>
                    <CardText className="mt-5 col-12"> {props.films} </CardText>
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Species: </CardText>
                    <CardText key={props.species} className="col-12 mt-5"> {props.species} </CardText> 
                    <CardText className="font-weight=bold mein-card bold-card col-12"> Vehicles(s): </CardText>
                    {props.vehicles.map(vehicles => {
                        return <CardText key={vehicles} className="col-12 mt-5"> {vehicles} </CardText>
                    })}
                    <CardText className="font-weight-bold mein-card bold-card col-12"> Starships(s): </CardText>
                            {props.starships.map(starship => {
                            return <CardText key={starship} className="mt-5 col-12"> {starship} </CardText> 
                    })}
                </CardBody>
            </Card>
        </div>
    )
}

export default Character