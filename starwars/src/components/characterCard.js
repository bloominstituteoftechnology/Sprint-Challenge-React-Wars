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
                                <CardBody className="card">
                                        <CardTitle className="character-name">{props.name}</CardTitle>
                                        <CardSubtitle>Character Biography</CardSubtitle>
                                        <CardText>
                                            
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