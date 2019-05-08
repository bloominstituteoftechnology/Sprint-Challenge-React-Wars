import React from 'react';

class Card extends React.Component {
  render() {
    return <div key={this.props.name} className="characterCard">
      <h2>{this.props.name}</h2>
      <div className="cardContent">
        <div className="facts">
          <p>Birth Year: {this.props.year}</p>
          <p>Gender: {this.props.gender}</p>
          <p>Hair Color: {this.props.hair}</p>
          <p>Eye Color: {this.props.eyes}</p>
          <p>Skin Color: {this.props.skin}</p>
        </div>

      </div>
      <div className="selectCard" onClick={this.props.clickHandler}>
        Remove
      </div>
    </div>;
  }
}

export default Card;