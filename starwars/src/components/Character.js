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
                    <CardText className="col-12"> {props.eye_color} </CardText>
                    <CardText className="bold-card mein-card col-12"> Hair color: </CardText>
                    <CardText className="col-12"> {props.hair_color} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Height: </CardText>
                    <CardText className="col-12"> {props.height} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Mass: </CardText>
                    <CardText className="col-12"> {props.mass} </CardText>
                    <select className="mein-issues col-12"> <option className="font-weight-bold bold-card mein-card"> Homeworld Link: </option>
                    <option className="col-12"> {props.homeworld} </option> </select>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Films: </CardText>
                    <CardText className="mx-5 col-12"> {props.films} </CardText>
                    <select className="mein-issues col-12"> 
                        <option className="font-weight-bold bold-card mein-card"> Species Link: </option>
                            {props.species.map(species => {
                            return <option key={species}> {species} </option> 
                    })}
                    </select>
                    <select className="mein-issues col-12"> 
                        <option className="font-weight=bold mein-card"> Vehicles Link(s) </option>
                            {props.vehicles.map(vehicles => {
                            return <option key={vehicles}> {vehicles} </option>
                    })}
                    </select>
                    <select className="mein-issues col-12"> 
                        <option className="font-weight-bold mein-card"> Starships Link(s) </option>
                            {props.starships.map(starship => {
                            return <option key={starship}> {starship} </option> 
                    })}
                    </select>
                </CardBody>
            </Card>
        </div>
    )
}

export default Character