import React from 'react'
import './StarWars.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col, CardSubtitle, Button
} from 'reactstrap';


const Starwars = props => {
    return (
        <div className="card-container">
            <Row>
                <Col sm="6">
                    <Card Col>
                        <CardBody>
                            <CardTitle>{props.name}</CardTitle>
                            <CardText>{props.gender}</CardText>
                            <CardText>{props.mass}</CardText>
                            <CardText>{props.birth}</CardText>
                            <CardText>{props.eye}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

    );

}

export default Starwars;