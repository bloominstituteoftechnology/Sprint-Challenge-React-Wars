import React from 'react';
import './StarWars.css'

function Display(props) {
  console.log('props', props);
  return (
  <div className= "list-elements">
    <ul>
      <li>Name: {props.height.name}</li>
      <li>Height: {props.height.height}</li>
      <li>Weight: {props.height.mass}kg</li>
      <li>Hair Color: {props.height.hair_color}</li>
    </ul>

      </div>



  )
}

export default Display;
