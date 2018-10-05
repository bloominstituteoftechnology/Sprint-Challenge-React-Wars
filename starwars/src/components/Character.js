import React from "react";

const Character = ({ data }) => (
  <div className="Character">
    <h2>{data.name}</h2>
    <p>gender: {data.gender}</p>
    <p>birth_year: {data.birth_year}</p>
    <p>height: {data.height}</p>
    <p>mass: {data.mass}</p>
    <p>eye_color: {data.eye_color}</p>
    <p>hair_color: {data.hair_color}</p>
    <p>skin_color: {data.skin_color}</p>
  </div>
);

export default Character;
