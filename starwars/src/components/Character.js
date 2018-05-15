import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
                        return <NavLink to={`/films/${film.toLowerCase().split(' ').join('')}`} className="col-12 mt-2"><CardText> {film} </CardText></NavLink>
                    })}
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Species: </CardText>
                    <CardText key={props.species} className="col-12 mt-2"> {props.species} </CardText> 
                    <CardText className="font-weight=bold mein-card bold-card col-12"> Vehicles(s): </CardText>
                    {props.vehicles.map(vehicles => {
                        return <NavLink to={`/vehicles/${vehicles.toLowerCase().split(' ').join('')}`} className="col-12 mt-2"><CardText key={vehicles}> {vehicles} </CardText></NavLink>
                    })}
                    <CardText className="font-weight-bold mein-card bold-card col-12"> Starships(s): </CardText>
                            {props.starships.map(starship => {
                            return <NavLink to={`/starships/${starship.toLowerCase().split(' ').join('')}`} className="col-12 mt-2"><CardText key={starship}> {starship} </CardText></NavLink> 
                    })}
                </CardBody>
            </Card>
        </div>
    )
}

export default Character