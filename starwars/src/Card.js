import React, { Component } from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className = "Card">
        <h1>{props.char.name}</h1>
        <p><span class = "Label">gender: </span>{props.char.gender}</p>
        <p><span class="Label">born in: </span>{props.char.birth_year}</p>
        <p><span class="Label">height: </span>{props.char.height} units</p>
        <p><span class="Label">weight: </span>{props.char.mass} units</p>
        <p><span class="Label">skin color: </span>{props.char.skin_color}</p>
        <p><span class="Label">hair color: </span>{props.char.hair_color}</p>
        <p><span class="Label">eye color: </span>{props.char.eye_color}</p>
      </div>
    </div>
  )
}

export default Card;