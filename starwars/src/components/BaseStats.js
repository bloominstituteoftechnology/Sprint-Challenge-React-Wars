import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const BaseStats = props => {
    return (
    <div className="container fierce">
        <div className="row">
        <Card>
            <CardTitle className="font-weight-bold" key={props.name}> {props.name} </CardTitle>
            <select className="mw-100 mein-issues">
                <option> Home planet </option>  
                <option key={props.homeworld}> {props.homeworld } </option>
            </select>
            <CardText className="font-weight-bold" key={props.mass}> Mass: </CardText>
            <CardText> {props.mass} </CardText>
            <CardText className="font-weight-bold" key={props.hair_color}> Hair color: </CardText>
            <CardText> {props.hair_color} </CardText>
            <CardText className="font-weight-bold" key={props.gender}> Gender: </CardText>
            <CardText> {props.gender} </CardText>
            <CardText className="font-weight-bold" key={props.eye_color}> Eye color: </CardText>
            <CardText> {props.eye_color} </CardText>
            <CardText className="font-weight-bold" key={props.skin_color}> Skin color: </CardText>
            <CardText> {props.skin_color} </CardText>
            <CardText className="font-weight-bold" key={props.birth_year}> Birth year: </CardText>
            <CardText> {props.birth_year} </CardText>
            <CardText className="font-weight-bold" key={props.height}> Height: </CardText>
            <CardText> {props.height} </CardText>
        </Card>
        </div>
        </div>
    )
    }

export default BaseStats