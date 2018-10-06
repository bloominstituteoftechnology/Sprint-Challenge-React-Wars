import React, { Component } from 'react';

const Card = (props) =>{
    return (
<div className ="card">
    <h3 className="name">{props.char.name}</h3>
   {/*} <div className="species">Species:  {props.char.species.name}</div>*/}
    <div className="birthyear">Birth Year:  {props.char.birth_year}</div>
    <div className="eyeColor">Eye Color:  {props.char.eye_color}</div>
    <div className="gender">Gender:  {props.char.gender}</div>
  </div>
    )

}


export default Card;