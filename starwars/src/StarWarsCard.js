import React from 'react';
import { CardText, CardBody, CardSubtitle, Col, } from "reactstrap";
import styled from 'styled-components';

    const StyledCard = styled.div`
    
    width: 80%;
    margin: 0 auto;  
    border-bottom: 1px solid ghostwhite; 
    text-shadow: 1px 2px 5px #fff;
    
    `;


const Title = styled.h1`
        font-size: 1.4rem;
        text-shadow: 2px 2px 3px #EE00FF;
        color: #443e3e;
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
                    {/* <hr /> */}
                </CardBody>
            </StyledCard>

        </Col>
    )
} 