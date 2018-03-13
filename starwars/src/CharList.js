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
    
    const cardBackgroundStyles = {
      background: "#d0ca76"
    };
    
    const { name, birth_year, eye_color, gender, height, skin_color } = this.props.character;
    return (
      <CardDeck className="CharCard my-3 mx-1">
        <Card style={cardBackgroundStyles}>
          <CardTitle className="text-center mb-0 pt-3 px-3">
            <h2 className="mb-0">{ name }</h2>
          </CardTitle>
          <CardBody className="text-left">
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