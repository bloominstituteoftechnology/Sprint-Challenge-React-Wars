import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CharacterCard = (props) =>{
    const x = props.chars
    return(
        <div className="starCards">      
      <Card inverse style={{ backgroundColor: '#444', borderColor: '#333' }} className="cardContainer">
        <CardBody>
          <CardTitle>{x.name}</CardTitle>
          <div className="row">
            <div className="col-6">Birth Year: {x.birth_year}</div>
            <div className="col-6">Hair Color: {x.hair_color}</div>
            <div className="col-6">Height: {x.height}</div>
            <div className="col-6">Mass: {x.mass}</div>
            <div className="col-6">Eye Color: {x.eye_color}</div>
            <div className="col-6">Gender: {x.gender}</div>
            <div className="col-6">Skin Color: {x.skin_color}</div>
          </div>         
        </CardBody>         
      </Card>      
    </div>
    )
}

export default CharacterCard;