import React, { Component } from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const BaseStats = props => {
    return (
    <div className="container fierce">
        <div className="row">
        <Card>
            <CardTitle key={props.name}> {props.name} </CardTitle>
            <select className="mw-100 mein-issues">
                <option> Home planet </option>  
                <option key={props.homeworld}> {props.homeworld } </option>
            </select>
            <CardText key={props.mass}> {props.mass} </CardText>
            <CardText key={props.hair_color}> {props.hair_color} </CardText>
            <CardText key={props.gender}> {props.gender} </CardText>
            <CardText key={props.eye_color}> {props.eye_color} </CardText>
            <CardText key={props.skin_color}> {props.skin_color} </CardText>
            <CardText key={props.birth_year}> {props.birth_year} </CardText>
            <CardText key={props.height}> {props.height} </CardText>
        </Card>
        </div>
        </div>
    )
    }

export default BaseStats