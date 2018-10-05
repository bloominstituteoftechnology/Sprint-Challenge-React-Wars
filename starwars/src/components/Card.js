import React from 'react'
import './StarWars.css'

const Card = ({ char }) => (
  <div className="card">
    <p>{char.name}</p>
  </div>
)

export default Card
