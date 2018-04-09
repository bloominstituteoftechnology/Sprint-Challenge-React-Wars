import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay, CardBody, CardText } from 'reactstrap';

class CardFactory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.character,
    };
  }

  charBody = () => {
    const charz = this.state.character;
    return (
      <CardBody className="characterBio">
        <CardText>{charz.name} was born in {charz.birth_year}.</CardText>
        <CardText>{charz.name.split(' ')[0]} is {this.props.character.height}x tall and weighs {this.props.character.mass}x.</CardText>
        <CardText>Other physical attributes includ:<br/>
          {charz.eye_color} eyes, {charz.hair_color} hair and {charz.skin_color} skin.
        </CardText>
      </CardBody>
    )
  }

  render() {
    return (
      <Card inverse className="col-3 Card">
        <CardImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" className="Card__img" />
        <CardImgOverlay>
          <CardTitle className="characterName">{this.state.character.name}</CardTitle>
          {this.charBody()}
        </CardImgOverlay>
      </Card>
    )
  }
}

export default CardFactory;
