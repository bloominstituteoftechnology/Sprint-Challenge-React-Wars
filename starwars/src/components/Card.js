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
          <p>Height: {this.props.character.height}</p>
          <p>Birth Year: {this.props.character.birth_year}:</p>
        </div>
        <p>
          A long time ago, in a galaxy far, far away... It is a period of civil
          war. Rebel spaceships, striking from a hidden base, have won their
          first victory against the evil Galactic Empire. During the battle,
          Rebel spies managed to steal secret plans to the Empire's ultimate
          weapon, the Death Star, an armored space station with enough power to
          destroy an entire planet.
        </p>
      </div>
    );
  }
}
export default Card;
