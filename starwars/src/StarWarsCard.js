import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Col, Button } from "reactstrap";
import styled from 'styled-components';

const StyledCard = styled.div`
    
    width: 100%;
    margin: 0 auto;   
    
`;


const Title = styled.h1`
        font-size: 1.2rem;
`;

export default function StarWarsCard(props) {

    return(
        <Col xs='6' lg='4'>
            <StyledCard height='100%' body outline color = 'danger'  className='text-left'>
                <CardBody height='100%'>
                    <Title className='text-center'>{props.name}</Title>
                    <CardSubtitle className='text-center'>Gender: {props.gender}</CardSubtitle>
                    <CardText>Birth Year: {props.birthYear}</CardText>
                    <CardText>Eye Color: {props.eyes}</CardText>
                    <CardText>Hair Color: {props.hair}</CardText>
                    {/* <Button className='text-left'>More</Button> */}
                    <hr />
                </CardBody>
            </StyledCard>

        </Col>
    )
} 