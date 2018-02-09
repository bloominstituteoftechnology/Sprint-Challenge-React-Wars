import React, { Component } from 'react';
import CardBlockStyle from './cardblockstyle.js';

class CardBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardBlockStyle>
        <h2>{this.props.data.name}</h2>
        <img />
        <p>Gender: {this.props.data.gender}</p>
        <p>Height: {this.props.data.height} cm</p>
        <p>Weight: {this.props.data.mass} kg</p>
        <p>Hair: {this.props.data.hair_color}</p>
        <p>Complexion: {this.props.data.skin_color}</p>
      </CardBlockStyle>
    );
  }
}

export default CardBlock;
