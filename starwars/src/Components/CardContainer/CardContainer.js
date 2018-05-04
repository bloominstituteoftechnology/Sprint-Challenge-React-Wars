import React from 'react';
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText,CardTitle } from 'reactstrap';
import './CardContainer.css';
const CardContainer = props =>{
    return(
        <div>
            <Container>
                <Row>
                    <Col className = "cardc">
                        <Card>
                            <CardTitle>{props.character.name}</CardTitle>
                            <CardText>{props.character.height}</CardText>
                            <CardText>{props.character.mass}</CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardContainer;