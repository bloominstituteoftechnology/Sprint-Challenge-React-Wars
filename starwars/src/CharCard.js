import React from "react";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './CharCard.css'

const CharCard = (props) => {
    return (
      <div className="CharCard">
        <Card className="CardContainer" >
          <CardBody>
            <CardTitle className="CharName">{props.char.name}</CardTitle>
            <CardSubtitle className="VitalsData">Vital Data:</CardSubtitle>
  
            <div className="CardContent">
            <CardText>Birth Year: {props.char.birth_year}</CardText>
            <CardText>Gender: {props.char.gender}</CardText>
            <CardText>Height: {props.char.height} cm</CardText>
            <CardText>Mass: {props.char.mass} kg</CardText>
            <CardText>Eye Color: {props.char.eye_color}</CardText>
            </div>
  
            <Button className="btn-card">Learn More</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
  
  export default CharCard;