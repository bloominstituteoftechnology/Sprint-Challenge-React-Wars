import React, { Component } from 'react';
import CharacterProperty from '../CharacterProperty/CharacterProperty';
import './Card.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="CardContainer">
        {
          this.props.data.map((data) => {

            const characterName = data.name.split("_").map((part) => {
              return part.charAt(0).toUpperCase() + part.slice(1);
            }).join(" ")
            
            return (
              <div className="Card Character">
                <div className="CharacterName">{ characterName }</div>
                <CharacterProperty data={data} />
              </div>
            );
            
          })
        }
      </div>
    );
  }

}

export default Card;