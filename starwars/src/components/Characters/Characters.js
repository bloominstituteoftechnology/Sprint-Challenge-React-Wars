import React, { Component } from 'react';
import './Characters.css';
import Homeworlds from "../Homeworlds/Homeworlds";
import { Card, CardImg, CardText, CardBody, CardLink, CardHeader, CardFooter, CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import Moment from 'react-moment';

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    this.setState({
      character: this.props.character,
      homeworld: this.props.character.homeworld
    });
  }

  render() {
    return (
      <div className="CharacterCard">
                    <Card className="w-100">
                        <CardHeader>
                            <CardTitle>
                                {this.state.character.name}
                            </CardTitle>
                        </CardHeader>
                        <CardBody className="CharacterCard__body">
                            <CardText><span>Height:</span> {this.state.character.height}</CardText>
                            <CardText><span>Mass:</span> {this.state.character.mass}</CardText>
                            <CardText><span>Hair Color:</span> {this.state.character.hair_color}</CardText>
                            <CardText><span>Skin Color:</span> {this.state.character.skin_color}</CardText>
                            <CardText><span>Eye Color:</span> {this.state.character.eye_color}</CardText>
                            <CardText><span>Birth Year:</span> {this.state.character.birth_year}</CardText>
                            <CardText><span>Gender:</span> {this.state.character.gender}</CardText>
                            <CardText><span>Homeworld:</span> <Homeworlds homeworld={this.props.character.homeworld} /></CardText>
                        </CardBody>
                        <CardFooter className="CharacterCard__footer-text text-muted text-uppercase">Last Update: <Moment fromNow>{this.state.character.edited}</Moment></CardFooter>
                    </Card>
      </div>
    );
  }
}

export default Characters;
