import React from "react"
import { card } from 'reactstrap'
import { Card, CardBody, CardTitle, CardText } from "reactstrap"



const CharacterCard = props => {

    return (

        <div className="personCard">
            <Card>

                <CardTitle>My name is {props.name}</CardTitle>
                <CardBody>
                    <CardText>I am '{props.height}' cm tall</CardText>
                    <CardText>I have {props.eyeColor} eye color</CardText>
                    <CardText>and I was born in {props.birthdate}, </CardText>
                    <CardText>I am a {props.gender} looking for love</CardText>
                </CardBody>
            </Card>

        </div>

    )


}


export default CharacterCard;