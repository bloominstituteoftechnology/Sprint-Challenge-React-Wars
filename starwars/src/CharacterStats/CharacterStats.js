import React, { Component } from 'react';
import profilePictures from '../profilePictures.js';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from '../../node_modules/reactstrap/lib';

class CharacterStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.stats,
      dropdownOpen: false,
      proPic: <img src={this.props.img} alt="test" className="profilePicture" />
    };
  }

  toggleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  mainStats = () => {
    return (
      <div className="Stats__main">
        <div className="Stats__main Stats__main--sub">
          <div className="Stats__main--bold">Born</div>
          <div>{this.state.character.birth_year}</div>
        </div>
        <div className="Stats__main .Stats__main--sub">
          <div className="Stats__main--bold">Gender</div>
          <div>{this.state.character.gender}</div>
        </div>
      </div>
    )
  }

  attributes = () => {
    return (
      <CardText className="Stats__main">
        <div>{this.state.character.eye_color}</div>
        <div>{this.state.character.hair_color}</div>
        <div>{this.state.character.height}</div>
        <div>{this.state.character.skin_color}</div>
      </CardText>
    )
  }

  creation = () => {
    return (
      <CardText className="cardText">
        <small className="text-muted faded">Inception: {this.state.character.created}</small>
        <small className="text-muted faded">Last Edit: {this.state.character.edited}</small>
      </CardText>
    )
  }

  render() {
    return (
      <CardImgOverlay className="pop">
        <CardTitle>{this.state.character.name}</CardTitle>
        <CardText>{this.mainStats()}</CardText>
        {this.attributes()}
        {this.state.proPic}
        {this.creation()}
      </CardImgOverlay>
    )
  }
}

export default CharacterStats;
