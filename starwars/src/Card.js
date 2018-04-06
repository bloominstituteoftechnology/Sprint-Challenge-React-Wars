import React, { Component } from 'react';

class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="card-wrap">
        {this.props.chars.map(char => {
          return (
            <div className="card" key={char.name}>
              <p className="char-name">{char.name}</p>
              <p>birth year: {char.birth_year}</p>
              <p>gender: {char.gender}</p>
              <p>hair color: {char.hair_color}</p>
              <p>eye color: {char.eye_color}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
