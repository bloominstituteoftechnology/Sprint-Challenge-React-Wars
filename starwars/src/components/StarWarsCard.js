import React from 'react';
import {
  Card, CardTitle,
  CardSubtitle, CardBody, Col
} from 'reactstrap';
import styled from 'styled-components';

let NewCard = styled(Card)`
margin: 20px;
`;

let StarWarsCard = (props) => {

    return (
        <Col xs="12" md="6" xl="3">
            <NewCard body inverse color="success" className='container'>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Height: {props.height}</CardSubtitle>
                    <CardSubtitle>Weight: {props.mass}kg</CardSubtitle>
                    <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                    <CardSubtitle>Birth: {props.birth}</CardSubtitle>
                </CardBody>
            </NewCard>
        </Col>
    )
}

export default StarWarsCard;