import React from 'react'
import './StarWars.css'

const Card = ({
  char: {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color
  }
}) => (
  <div className="card">
    <h3>{name}</h3>
    <p>Born: {birth_year}</p>
    <p>Eye color: {eye_color}</p>
    <p>Gender: {gender}</p>
    <p>Hair color: {hair_color}</p>
    <p>Height: {height}</p>
    <p>Mass: {mass}</p>
    <p>Skin color: {skin_color}</p>
  </div>
)

export default Card
