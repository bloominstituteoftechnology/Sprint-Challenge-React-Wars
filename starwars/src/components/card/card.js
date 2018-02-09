import React, { Component } from 'react';
import CardBlock from '../cardblock/cardblock.js';
import CardStyle from './cardstyle.js';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardStyle>
          {this.props.data.map((val, i) => <CardBlock key={i} data={val} />)}
      </CardStyle>
    );
  }
}

export default Card;