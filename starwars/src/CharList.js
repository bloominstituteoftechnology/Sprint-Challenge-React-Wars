import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardDeck } from 'reactstrap';
import './CharList.css';

class CharList extends Component {
  constructor() {
    super();
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    this.setState({
      character: this.props.character
    });
  }

  render() {
    const { name, birth_year, eye_color, gender, height, skin_color } = this.props.character;
    return (
      <CardDeck className="CharCard">
        <Card>
          <CardTitle>
            <h2>{ name }</h2>
          </CardTitle>
          <CardBody>
            <CardText>Birthday: { birth_year }</CardText>
            <CardText>Eye Color: { eye_color }</CardText>
            <CardText>Gender: { gender }</CardText>
            <CardText>Height: { height }</CardText>
            <CardText>Skin Color: { skin_color }</CardText>
          </CardBody>
        </Card> 
      </CardDeck>
    );
  }
}

export default CharList;