import React from 'react'
import { Card, CardSubtitle, CardTitle, CardText } from 'reactstrap'

const BaseStats = props => {
    return (
    <div className="container fierce">
        <div className="row">
        <Card className="mein-card">
            <CardTitle className="font-weight-bold mein-card boldest-card"> {props.name} </CardTitle>
            <CardSubtitle className="font-weight-bold mein-card boldest-card"> came to being on the planet  </CardSubtitle>
            <CardSubtitle> {props.homeworld} </CardSubtitle>
            <CardText className="font-weight-bold mein-card bold-card"> {props.name} was born in </CardText>
            <CardText> {props.birth_year} </CardText>
            <CardText> is of the </CardText>
            <CardText> {props.species} species </CardText>
            <CardText> and currently weighs </CardText>
            <CardText className="font-weight-bold mein-card bold-card"> {props.mass} </CardText>
            <CardText> , though it's rude for you to care. </CardText>
            <CardText> {props.name} has </CardText>
            <CardText className="font-weight-bold mein-card bold-card" > {props.hair_color} </CardText>
            <CardText> colored hair, unless they don't, </CardText>
            <CardText key={props.gender + props.name}> and is thought to be </CardText>
            <CardText  className="font-weight-bold mein-card bold-card"> {props.gender} </CardText>
            <CardText> {props.name} has </CardText>
            <CardText  className="font-weight-bold mein-card bold-card"> {props.eye_color} </CardText>
            <CardText> colored eyes, and </CardText>
            <CardText  className="font-weight-bold mein-card bold-card"> {props.skin_color} </CardText>
            <CardText> colored skin.  They currently measure: </CardText>
            <CardText className="font-weight-bold mein-card bold-card"> {props.height} </CardText>
            <CardText> in height.</CardText>
            <CardText> {props.name} has been known to drive </CardText>
            <CardText> {props.starship} and </CardText>
            <CardText> {props.vehicles} </CardText>
            <CardText> and has appeared in </CardText>
            <CardText> {props.film} </CardText>
        </Card>
        </div>
        </div>
    )
    }

export default BaseStats