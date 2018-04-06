import React from "react"
import "./Card.css"

// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: Array[5]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "https://swapi.co/api/planets/1/"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: Array[1]
// starships: Array[2]
// url: "https://swapi.co/api/people/1/"
// vehicles: Array[2]

const Card = props => (
  <div className="Card--container">
    <h3 className="Card--name">{props.name}</h3>
    <div className="Card--films">{props.films[0]}</div>
    <p className="Card--birth">{props.birth_year}</p>
    <p className="Card--height">{props.height}</p>
    <p className="Card--gender">{props.gender}</p>
    <p className="Card--species">{props.species}</p>
  </div>
)

export { Card }
