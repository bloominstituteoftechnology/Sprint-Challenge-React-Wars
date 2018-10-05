import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle,  Container, Row, Col } from 'reactstrap';
import './StarWars.css'

const StarWars = (props) => {
    return (
        <div className ="star-container">
            <Container >
            <Card style={{width:"100%", height:"60%"}}>
                <CardBody>
                    <Row className ="col-12 text-style">
                    <CardTitle>{`Name : ${props.starWars.name}`}</CardTitle>
                    </Row>

                    <Row>
                    <Col className = "col-6">
                    <CardSubtitle>{`Gender : ${props.starWars.gender}`}</CardSubtitle>
                    </Col>
                    <Col className = "col-6">
                    <CardSubtitle>{`B-Year : ${props.starWars.birth_year}`}</CardSubtitle>
                    </Col>
                    </Row>

                    <Row>
                    <Col className ="col-6 " >
                    <CardText>{`Hair Color: ${props.starWars.hair_color}`}</CardText>
                    <CardText>{`Eye Color: ${props.starWars.eye_color}`}</CardText>
                    <CardText>{`Skin Color: ${props.starWars.skin_color}`}</CardText>
                    </Col>
                    <Col className ="col-6 ">
                    <CardText>{` Height:${props.starWars.height}`}</CardText>
                    <CardText>{`Mass: ${props.starWars.mass}`}</CardText>
                    </Col>
                  </Row>
                </CardBody>
            </Card>
            </Container>
        </div>
    );
};

export default StarWars;