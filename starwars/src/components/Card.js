import React from "react";
// import './Todo.css';
function Card(props) {
  return <div className="card"><h2 id={props.card.id}>
             {props.card.name}
         </h2>
         <li>
          Eye Color: {props.card.eye_color}
         </li>
         <li>
           Hair Color: {props.card.hair_color}
         </li>
         <li>
           Height: {props.card.height} units
         </li>
         <li>
           Skin Color: {props.card.skin_color}
         </li>
         <li>
           Gender: {props.card.gender}
         </li>
         </div>
}
export default Card;