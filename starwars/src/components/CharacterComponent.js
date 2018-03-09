import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

class CharacterComponent extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.char.name}</CardTitle>
          <CardText>Birth Year: {this.props.char.birth_year}</CardText>
          <CardText>Height: {this.props.char.height}</CardText>
          <CardText>Mass: {this.props.char.mass}</CardText>
          <CardText>Hair Color: {this.props.char.hair_color}</CardText>
          <CardText>Skin Color: {this.props.char.skin_color}</CardText>
          <CardText>Eye Color: {this.props.char.eye_color}</CardText>
          <CardText>Gender: {this.props.char.gender}</CardText>
          <CardText>Home World: {this.props.char.homeworld}</CardText>
          <CardText>Films: {this.props.char.films}</CardText>
          <CardText>Species: {this.props.char.species}</CardText>
        </CardBody>
      </Card>
    );
  }
}

CharacterComponent.propTypes = {};

export default CharacterComponent;
