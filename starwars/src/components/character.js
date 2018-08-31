// import React, { Component } from 'react';
import React from 'react';

const Character = props => {
  // console.log(props.data);
  return (
  
  <div>
  
  {props.data.name}
  {props.data.birth_year}
  {props.data.gender}
  {props.data.hair_color}
  {props.data.eye_color}
  {props.data.skin_color}
  {props.data.height}
  {props.data.mass}
  {props.data.created}
  {props.data.edited}

  </div>

  );
 
};

export default Character;