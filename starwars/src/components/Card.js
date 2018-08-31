import React, { Component } from "react";
import "./StarWars.css";

class Card extends React.Component {
  constructor() {
    super();
  }
  render() {
    //add sub components
    return (
      <div className="card">
        <div className="name">
          <h2>{this.props.character.name}</h2>
        </div>
        <div className="character-img" />
        <div className="character-details">
          <p>Character details:</p>
          <p>Height: {this.props.character.height}</p>
          <p>Birth Year: {this.props.character.birth_year}:</p>
        </div>
      </div>
    );
  }
}
export default Card;
