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
      </CardBlockStyle>
    );
  }
}

export default CardBlock;
