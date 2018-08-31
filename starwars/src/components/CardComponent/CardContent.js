import React, { Component } from 'react';
import './Card.css';


export default function CardContent(props) {
    return (
      <div className="card-content">
        <ul>
          <li>Eye Color: { this.state.eye_color }</li>
          <li>Gender: { this.state.gender }</li>
          <li>Hair Color: { this.state.hair_color }</li>
          <li>Height: { this.state.height }</li>
          <li>Homeworld: { this.state.homeworld }</li>
          <li>Mass: { this.state.mass }</li>
          <li>Skin Color: { this.state.skin_color }</li>
          <li>More Info: <a>{ this.state.url }</a> </li>
          <li>Films: { this.state.films }</li>
          <li>Species: { this.state.species }</li>
          <li>Starships: { this.state.starships }</li>
          <li>Vehicles: { this.state.vehicles }</li>
        </ul>
      </div>
    );
}
