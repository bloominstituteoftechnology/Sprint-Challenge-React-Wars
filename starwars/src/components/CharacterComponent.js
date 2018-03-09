import React, { Component } from "react";
import FilmComponent from "./FilmComponent.js";
import PropTypes from "prop-types";
import {
  Collapse,
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col
} from "reactstrap";

import "./CharacterComponents.css";

class CharacterComponent extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      planet: [],
      species: []
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  componentDidMount() {
    console.log(this.props.char.homeworld);
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ planet: data });
      });

    fetch(this.props.char.species)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data });
      });
  }

  render() {
    return (
      <Col sm={9}>
        <Card className="charCards m-3">
          <CardBody>
            <CardTitle>{this.props.char.name}</CardTitle>

            <Collapse isOpen={this.state.collapse}>
              <CardText>Birth Year: {this.props.char.birth_year}</CardText>
              <CardText>Height: {this.props.char.height}</CardText>
              <CardText>Mass: {this.props.char.mass}</CardText>
              <CardText>Hair Color: {this.props.char.hair_color}</CardText>
              <CardText>Skin Color: {this.props.char.skin_color}</CardText>
              <CardText>Eye Color: {this.props.char.eye_color}</CardText>
              <CardText>Gender: {this.props.char.gender}</CardText>
              <CardText>Home World: {this.state.planet.name}</CardText>
              <CardText>
                Films:{" "}
                {this.props.char.films.map(film => {
                  return <FilmComponent film={film} />;
                })}
              </CardText>
              <CardText>Species: {this.state.species.name}</CardText>
            </Collapse>
          </CardBody>
          <CardBody>
            <Button className="" onClick={this.toggle}>
              Read More
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

CharacterComponent.propTypes = {
  planet: PropTypes.arrayOf(PropTypes.object)
};

export default CharacterComponent;
