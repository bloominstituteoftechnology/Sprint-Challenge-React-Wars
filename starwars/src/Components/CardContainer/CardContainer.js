import React from 'react';
import { Card, CardBody, CardImg, Container, Row,Col, CardSubtitle, CardText,CardTitle } from 'reactstrap';
import './CardContainer.css';
import CardChar from './CardChar'
const CardContainer = props =>{
    return(
        <div>
            <Container>
                <Row>
                    
                        {
                            props.character.map((item, index) => <CardChar key = {index} char = {item}/>)
                        }
                    
                </Row>
            </Container>
        </div>
    )
}

export default CardContainer;