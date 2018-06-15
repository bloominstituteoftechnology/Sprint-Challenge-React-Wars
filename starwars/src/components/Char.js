import React from 'react';

const Char = props => {
    return(
      <div class="card">
        <h4>{props.data.name}</h4>
        <div className="data">
        <h5>Character details</h5>
        <p>Gender: {props.data.gender}</p>
        <p>Birth Year: {props.data.birth_year}</p>
        <p>Eye Color: {props.data.eye_color}</p>
        <p>Hair Color: {props.data.hair_color}</p>
        </div>
      </div>
    );
}

export default Char
