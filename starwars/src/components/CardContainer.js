import React, { Component } from 'react';
import Card from './Card';


class CardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cardContainer">
        {this.props.characters.map(character => {
          return (
            <div className="characters" key={character.created}>
              <h4>NAME: {character.name}</h4>
              <h4>BIRTH YEAR {character.birth_year}</h4>
              <h4>GENDER {character.gender}</h4>
              <h4>EYE COLOR {character.eye_color}</h4>
              <h4>HAIR COLOR {character.hair_color}</h4>
              <h4>SKIN COLOR {character.skin_color}</h4>
              <h4>HEIGHT {character.height}</h4>
              <h4>MASS {character.mass}</h4>
            </div>
          );
        })}
        
        <Card />
      
      </div>
    );
  }
};

export default CardContainer;