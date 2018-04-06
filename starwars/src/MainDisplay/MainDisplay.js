import React, { Component } from 'react';
import CharacterStats from '../CharacterStats/CharacterStats.js';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from '../../node_modules/reactstrap/lib';

export class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.characterObject,
      proPic: this.props.img
    };
  }

  render() {
    return (
      <div className="opacity">
        <Card className="pop">
          <CardImg className="carding" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" alt="Card img cap" />
          <CharacterStats stats={this.state.character} img={this.state.proPic} />
        </Card>
      </div>
    )
  }
}
