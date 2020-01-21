import React from 'react';
import {
    CardImg, CardBody,
    CardTitle, CardSubtitle, Row
  } from 'reactstrap';
import styled from "styled-components"


const Style = styled.div`
    width: 100%;
    color: black;
    background-color: peru;
    border: solid 1px black;
`;

const Card = props => {
    return (
        <Style>
            <Row> 
                <CardBody>
                    <CardImg className="image" src="https://www.redwolf.in/image/cache/catalog/artwork-Images/sweatshirts/star-wars-logo-sweatshirt-artwork-128x128.png" alt="Card image cap" />
                    <CardTitle>{props.data.setCharacter.name}</CardTitle>
                    <CardSubtitle>Height: {props.data.setCharacter.height}</CardSubtitle>
                    <CardSubtitle>Mass: {props.data.setCharacter.mass}</CardSubtitle>
                    <CardSubtitle>Hair Color: {props.data.setCharacter.hair_color}</CardSubtitle>
                    <CardSubtitle>Skin Color: {props.data.setCharacter.skin_color}</CardSubtitle>
                    <CardSubtitle>Eye Color: {props.data.setCharacter.eye_color}</CardSubtitle>
                    <CardSubtitle>Birth Year: {props.data.setCharacter.birth_year}</CardSubtitle>
                    <CardSubtitle>Gender: {props.data.setCharacter.gender}</CardSubtitle>
                </CardBody>
            </Row>
        </Style>
    )
}

export default Card;

