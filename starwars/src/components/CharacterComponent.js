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
  Col,
  Row
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
              <Row>
                <Col sm={6}>
                  <CardText>
                    <span className="font-weight-bold">Birth Year:</span>{" "}
                    {this.props.char.birth_year}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Height:</span>{" "}
                    {this.props.char.height}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Mass:</span>{" "}
                    {this.props.char.mass}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Hair Color:</span>{" "}
                    {this.props.char.hair_color}
                  </CardText>

                  <CardText>
                    <span className="font-weight-bold">Skin Color:</span>{" "}
                    {this.props.char.skin_color}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Eye Color:</span>{" "}
                    {this.props.char.eye_color}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Gender:</span>{" "}
                    {this.props.char.gender}
                  </CardText>
                </Col>
                <Col sm={6}>
                  <CardText>
                    <span className="font-weight-bold">Home World: </span>{" "}
                    {this.state.planet.name}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Films:</span>{" "}
                    {this.props.char.films.map(film => {
                      return <FilmComponent key={film} film={film} />;
                    })}
                  </CardText>
                  <CardText>
                    <span className="font-weight-bold">Species:</span>{" "}
                    {this.state.species.name}
                  </CardText>
                </Col>
              </Row>
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
