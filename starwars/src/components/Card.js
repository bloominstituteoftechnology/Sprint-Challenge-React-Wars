import React from 'react';
import {
    CardImg, CardBody,
    CardTitle, CardSubtitle, Row
  } from 'reactstrap';

const Card = props => {
    return (
        <Row>
            <CardImg className="image" src="https://www.redwolf.in/image/cache/catalog/artwork-Images/sweatshirts/star-wars-logo-sweatshirt-artwork-128x128.png" alt="Card image cap" />
            <CardBody>
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

    )
}

export default Card;

