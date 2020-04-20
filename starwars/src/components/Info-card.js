import React from "react"
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap"

const infoCard = props => {

    return (
    <Col>       
        <Card className="soldCard">
            <CardBody>
                <CardTitle>{props.soldier.name}</CardTitle>
                    <CardText>Gender: {props.soldier.gender}</CardText>
                    <CardText>DOB: {props.soldier.birth_year}</CardText>
                    <CardText>Hair color: {props.soldier.hair_color}</CardText>
                    <CardText>Skin color: {props.soldier.skin_color}</CardText>
            </CardBody>
        </Card>
    </Col>
    )
}

export default infoCard