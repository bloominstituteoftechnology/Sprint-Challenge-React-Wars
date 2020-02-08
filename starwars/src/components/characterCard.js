import React from 'react';
import "../App.css";
import {CardText, CardBody,
    CardTitle, CardSubtitle, Card, Row, Col, Container} from 'reactstrap';
    import "../App.css";
// import styled from "styles";

    const CharacterCard = props => {
        return (
            <Container className="container">
                <Row>
                    <Col xs="6" sm="4" md>
                        <div>
                            <Card body inverse style={{ margin: '20px', padding:'10px', color:'#fff', backgroundColor: '#333', width: '60%', borderColor: '#333' }}>
                                <CardBody className="card">
                                        <CardTitle className="character-name" style={{padding:'10px', fontSize:'1.5em'}}>{props.name}</CardTitle>
                                        <CardSubtitle>Character Biography</CardSubtitle>
                                        <CardText>
                                            Height: {props.height} 
                                        </CardText>
                                        <CardText>
                                            Mass: {props.mass}
                                        </CardText>
                                        <CardText>
                                            Eye Color: {props.eye_color}
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