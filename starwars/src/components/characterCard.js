import React from 'react';
import StarWars from './components/StarWars';
import {CardText, CardBody,
    CardTitle, CardSubtitle, Card, Row, Col, Container} from 'reactstrap';
    import "../App.css";
import styled from "styles";

    const CharacterCard = props => {
        return (
            <Container>
                <Row>
                    <Col xs="6" sm="4">
                        <div>
                            <Card>
                                <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        )

    }
    
    export default CharacterCard;