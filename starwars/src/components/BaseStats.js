import React, { Component } from 'react'
import { Card, CardSubtitle, CardTitle, CardText } from 'reactstrap'

const BaseStats = props => {
    return (
        <Card>
            <CardTitle key={props.name}> {props.name} </CardTitle>
            <CardSubtitle key={props.homeworld}> {props.homeworld} </CardSubtitle>
            <CardText key={props.mass}> {props.mass} </CardText>
            <CardText key={props.hair_color}> {props.hair_color} </CardText>
            <CardText key={props.gender}> {props.gender} </CardText>
            <CardText key={props.eye_color}> {props.eye_color} </CardText>
            <CardText key={props.skin_color}> {props.skin_color} </CardText>
            <CardText key={props.birth_year}> {props.birth_year} </CardText>
            <CardText key={props.height}> {props.height} </CardText>
        </Card>
    )
}

export default BaseStats