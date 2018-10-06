import React from 'react'

export default (props) => {
  return (
   <div>
      <ul>
         <li>Born in: {props.data.birth_year}</li>
         <li>Gender: {props.data.gender}</li>
         <li>Height: {props.data.height}</li>
         <li>Mass: {props.data.mass}</li>
         <li>Skin Color: {props.data.skin_color}</li>
         <li>Hair Color: {props.data.hair_color}</li>
         <li>Eye color: {props.data.eye_color}</li>
      </ul>
   </div>
)
}
