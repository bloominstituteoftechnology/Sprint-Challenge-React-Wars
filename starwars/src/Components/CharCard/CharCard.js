import React, { Component } from 'react';
import './CharCard.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class CharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.character
    }

  }


  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.state.character.name}</CardTitle>
            <CardText>Birth Year: {this.state.character.birth_year} </CardText>
            <CardText>Eye Color: {this.state.character.eye_color} </CardText>
            <CardText>Gender: {this.state.character.gender} </CardText>
            <CardText>Hair Color: {this.state.character.hair_color} </CardText>
            <CardText>Height: {this.state.character.height}cm </CardText>
            <CardText>Mass: {this.state.character.mass}kg </CardText>
            <CardText>Skin Color: {this.state.character.skin_color} </CardText>
            <CardText>Species:  </CardText>



            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CharCard;
