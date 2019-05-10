import React from 'react';

function StarwarsChars(props) {
    return (
        <div className="charsName">

        </div>
    )
}export default CharsList; 


import React from 'react';

function StarwarsChars (props) {
  return (
    <div className="Character-List">
        <p>
          <strong>birth_year:</strong> {props.StarwarsChars.birth_year}
        </p>
        <p>
          <strong>created:</strong> {props.StarwarsChars.created}
        </p>
        <p>
          <strong>edited:</strong> {props.StarwarsChars.edited}
        </p>
        <p>
          <strong>eye_color:</strong> {props.StarwarsChars.eye_color}
        </p>
        <p>
          <strong>films:</strong> {props.StarwarsChars.films}
        </p>
        <p>
          <strong>gender:</strong> {props.StarwarsChars.gender}
        </p>
        <p>
          <strong> hair_color:</strong> {props.StarwarsChars.hair_color}
        </p>
        <p>
          <strong> height:</strong> {props.StarwarsChars.height}
        </p>
        <p>
          <strong>homeworld:</strong> {props.StarwarsChars.homeworld}
        </p>
        <p>
          <strong>mass:</strong> {props.StarwarsChars.mass}
        </p> <p>
          <strong>name:</strong> {props.StarwarsChars.name}
        </p>
        <p>
          <strong>skin_color:</strong> {props.StarwarsChars.skin_color}
        </p>
        <p>
          <strong>species:</strong> {props.StarwarsChars.species}
        </p>
        <p>
          <strong>starships:</strong> {props.StarwarsChars.starships}
        </p>
        <p>
          <strong>url:</strong> {props.StarwarsChars.url}
        </p>
        <p>
          <strong> vehicles: Array[]</strong> {props.StarwarsChars.vehicles}
        </p>
    </div>
  );
}

export default Student;
