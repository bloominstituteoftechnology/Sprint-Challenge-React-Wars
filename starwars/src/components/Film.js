import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Film = props => {
    return (
        <Card className="container-fluid film-background">
            <CardBody className="board">     
                <div className="content">
                    <CardTitle className="font-weight-bold boldest-card mein-card col-12 title"> {props.title} </CardTitle>
                    <CardSubtitle className="mt-2 col-12 font-weight-bold boldest-card mein-card second-title"> {props.episode_id} <br></br></CardSubtitle>
                    <CardText className="col-12 mt-2 opening-crawl"> {props.opening_crawl} </CardText>
                    <CardText className="bold-card mein-card col-12"> Director: </CardText>
                    <CardText className="col-12 mt-2"> {props.director} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Producer: </CardText>
                    <CardText className="col-12"> {props.producer} </CardText>
                    <CardText className="font-weight-bold bold-card col-12"> Release Date: </CardText>
                    <CardText className="col-12 mt-2"> {props.release_date} </CardText>
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Characters: </CardText>
                    {props.characters.map(people => {
                        return <CardText className="col-12 mt-2" key={people}> {people} </CardText>
                    })}
                    <CardText className="font-weight-bold bold-card mein-card col-12"> Planets: </CardText>
                    {props.planets.map(planet => {
                        return <CardText className="col-12 mt-2" key={planet}> {planet} </CardText>
                    })}
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Starships: </CardText>
                    {props.starships.map(starship => {
                         return <CardText key={starship} className="col-12 mt-2"> {starship}</CardText>})}
                    <CardText className="col-12 font-weight-bold bold-card mein-card"> Vehicles: </CardText>
                    {props.vehicles.map(vehicle => {
                         return <CardText key={vehicle} className="col-12 mt-2"> {vehicle}</CardText>})}
                         </div>
                </CardBody>
            </Card>
    )
}
export default Film