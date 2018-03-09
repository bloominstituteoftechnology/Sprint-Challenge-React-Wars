import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './StarWarsCard.css'

const StarWarsCard = (props) => {
  return (
    <div className="StarWarsCard" key={props.char.name}>
      <Card className="CardContainer" >
        <CardBody>
          <CardTitle>{props.char.name}</CardTitle>
          <CardSubtitle className="VitalsData">Vital Data:</CardSubtitle>

          <div className="CardBioContent">
          <CardText>Birth Year: {props.char.birth_year}</CardText>
          <CardText>Gender: {props.char.gender}</CardText>
          <CardText>Height: {props.char.height}</CardText>
          <CardText>Mass: {props.char.mass} kg</CardText>
          <CardText>Eye Color: {props.char.eye_color}</CardText>
          </div>

          <Button className="btn-card">Learn More</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default StarWarsCard;