import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const BaseStats = props => {
    return (
    <div className="container fierce">
        <div className="row">
        <Card className="mein-card">
            <CardTitle className="font-weight-bold mein-card boldest-card" key={props.name}> {props.name} </CardTitle>
            <select className="mw-100 mein-issues">
                <option> Home planet </option>  
                <option key={props.homeworld}>{props.homeworld} </option>
            </select>
            <CardText className="font-weight-bold mein-card bold-card" key={props.mass + props.name}> Mass: </CardText>
            <CardText> {props.mass} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.hair_color + props.name + props.homeworld}> Hair color: </CardText>
            <CardText> {props.hair_color} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.gender + props.name}> Gender: </CardText>
            <CardText> {props.gender} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.eye_color + props.name + props.gender}> Eye color: </CardText>
            <CardText> {props.eye_color} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.skin_color + props.name}> Skin color: </CardText>
            <CardText> {props.skin_color} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.birth_year + props.name + props.mass}> Birth year: </CardText>
            <CardText> {props.birth_year} </CardText>
            <CardText className="font-weight-bold mein-card bold-card" key={props.height + props.name}> Height: </CardText>
            <CardText> {props.height} </CardText>
        </Card>
        </div>
        </div>
    )
    }

export default BaseStats