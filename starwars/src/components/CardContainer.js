import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


class CardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Characters</h3>
      <div className="cardContainer">
        <div className="charactersContainer">
        {this.props.characters.map(character => {
          return (
            <div className="characters" key={character.created}>
            <Card className="characterCard">
              <CardBody>
              <CardTitle><span className="boldedText">NAME:</span> {character.name}</CardTitle>
              <CardText><span className="boldedText">BIRTH YEAR:</span> {character.birth_year}</CardText>
              <CardText><span className="boldedText">GENDER:</span> {character.gender}</CardText>
              <CardText><span className="boldedText">EYE COLOR:</span> {character.eye_color}</CardText>
              <CardText><span className="boldedText">HAIR COLOR:</span> {character.hair_color}</CardText>
              <CardText><span className="boldedText">SKIN COLOR:</span> {character.skin_color}</CardText>
              <CardText><span className="boldedText">HEIGHT:</span> {character.height}</CardText>
              <CardText><span className="boldedText">MASS:</span> {character.mass}</CardText>
              </CardBody>
              </Card>
            </div>
          );
        })}
        </div>
          <h3>Planets</h3>
          <div className="planetsContainer">
        {this.props.planets.map(planet => {
          return (
            <div className="planets" key={planet.created}>
            <Card className="planetCard">
              <CardBody>
              <CardTitle><span className="boldedText">NAME:</span> {planet.name}</CardTitle>
              <CardText><span className="boldedText">ROTATION PERIOD:</span> {planet.rotation_period}</CardText>
              <CardText><span className="boldedText">ORBITAL PERIOD:</span> {planet.orbital_period}</CardText>
              <CardText><span className="boldedText">DIAMETER:</span> {planet.diameter}</CardText>
              <CardText><span className="boldedText">CLIMATE:</span> {planet.climate}</CardText>
              <CardText><span className="boldedText">GRAVITY:</span> {planet.gravity}</CardText>
              <CardText><span className="boldedText">TERRAIN:</span> {planet.terrain}</CardText>
              <CardText><span className="boldedText">SURFACE WATER:</span> {planet.surface_water}</CardText>
              <CardText><span className="boldedText">POPULATION:</span> {planet.population}</CardText>
              
              </CardBody>
              </Card>
            </div>
          );
        })}
        </div>
        
        
      
      </div>
      </div>
    );
  }
};

export default CardContainer;