import React from "react";

import {curry} from '../../src/util'

import './StarWars.css'

const by = curry((x,y) => x === y)

export default function CharacterCard({originalData, massagedData}) {
  let { name, mass, height } = originalData

  return (
    <div className="character-card">
      <div className="character">
        <h3>Name: {name}</h3>
        <p>
          <strong>Mass: {mass}</strong>
        </p>

        <strong>Height: {height}</strong>

        
        <div>
          More Links{" "}
          { massagedData.links.map((link, i) => <p key={i*1000}>{link}</p>) }
        </div>
      </div>
    </div>
  );
};
