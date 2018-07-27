import React from'react';
const StarWarsCard=props=>
  <div className="card">
  <div className="card-content">
  <p className="flow-text">
  {'Birth year: '+props.starProp.birth_year}<br/>
  {'Created: '+props.starProp.created}<br/>
  {'Edited: '+props.starProp.edited}<br/>
  {'Eye color: '+props.starProp.eye_color}<br/>
  {'Gender: '+props.starProp.gender}<br/>
  {'Hair color: '+props.starProp.hair_color}<br/>
  {'Height: '+props.starProp.height}<br/>
  {'Mass: '+props.starProp.mass}<br/>
  {'Name: '+props.starProp.name}<br/>
  {'Skin color: '+props.starProp.skin_color}
  </p>
  </div>
  </div>
export default StarWarsCard;