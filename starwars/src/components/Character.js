import React from "react";

const Character = ({ data }) => (
  <div className="Character">
    <h2>{data.name}</h2>
    <p>Stats:</p>
    <h3>Gender: {data.gender}</h3>
    <h3>Birthday: {data.birth_year}</h3>
    <h3>Height: {data.height}</h3>
    <h3>Weight: {data.mass}</h3>
    <p>Looks:</p>
    <h3>Eye Color: {data.eye_color}</h3>
    <h3>Hair Color: {data.hair_color}</h3>
    <h3>Skin Color: {data.skin_color}</h3>
  </div>
);

export default Character;
