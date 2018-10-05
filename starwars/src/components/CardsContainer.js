import React from 'react'
import Card from './Card'
import './StarWars.css'

const CardsContainer = ({ chars }) => (
  <div className="cards-container">
    {chars.map((char, i) => <Card char={char} key={i} />)}
  </div>
)

export default CardsContainer