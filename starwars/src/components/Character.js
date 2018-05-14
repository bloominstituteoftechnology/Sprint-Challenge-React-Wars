import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Character = props => {
    return (
        <div className="container-fluid">
            <Card className="mein-card"> 
                <CardBody className="row">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12"> {props.name} </CardTitle>
                    <CardSubtitle className="mein-card bold-card col-12"> Birth year: </CardSubtitle>
                    <CardSubtitle className="col-12 my-4"> {props.birth_year} </CardSubtitle>
                    <CardText className="bold-card mein-card col-12"> Eye color: </CardText>
                    <CardText className="col-12 mt-2"> {props.eye_color} </CardText>
                    <CardText className="bold-card mein-card col-12"> Hair color: </CardText>
                    <CardText className="col-12 mt-2"> {props.hair_color} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Height: </CardText>
                    <CardText className="col-12"> {props.height} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Mass: </CardText>
                    <CardText className="col-12 mt-2"> {props.mass} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Homeworld: </CardText>
                    <CardText className="col-12 mt-2"> {props.homeworld} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Films: </CardText>
                    {props.films.map(film => {
                        return <CardText className="mt-2 col-12"> {film} </CardText>
                    })}
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Species: </CardText>
                    <CardText key={props.species} className="col-12 mt-2"> {props.species} </CardText> 
                    <CardText className="font-weight=bold mein-card bold-card col-12"> Vehicles(s): </CardText>
                    {props.vehicles.map(vehicles => {
                        return <CardText key={vehicles} className="col-12 mt-2"> {vehicles} </CardText>
                    })}
                    <CardText className="font-weight-bold mein-card bold-card col-12"> Starships(s): </CardText>
                            {props.starships.map(starship => {
                            return <CardText key={starship} className="mt-2 col-12"> {starship} </CardText> 
                    })}
                </CardBody>
            </Card>
        </div>
    )
}

export default Character