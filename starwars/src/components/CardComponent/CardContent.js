import React, { Component } from 'react';
import './Card.css';


export default function CardContent(cProps) {
    return (
      <div className="card-content">
        <ul>
          <li>{ cProps.name }</li>
          <li>Created: { cProps.created }</li>
          <li>Edited: { cProps.edited }</li>
          <li>Eye Color: { cProps.eye_color }</li>
          <li>Gender: { cProps.gender }</li>
          <li>Hair Color: { cProps.hair_color }</li>
          <li>Height: { cProps.height }</li>
          <li>Homeworld: { cProps.homeworld }</li>
          <li>Mass: { cProps.mass }</li>
          <li>Skin Color: { cProps.skin_color }</li>
          <li>More Info: <a>{ cProps.url }</a> </li>
          <li>Films: { cProps.films }</li>
          <li>Species: { cProps.species }</li>
          <li>Starships: { cProps.starships }</li>
          <li>Vehicles: { cProps.vehicles }</li>
        </ul>
      </div>
    );
}
