import React, { Component } from 'react';
import './StarwarsComp.css'

const StarwarsComp = (props) => {
  
    return (
      <div className="characters">
        <div>Name: {props.characters.name}</div>
        <div>Birth date: {props.characters.birth_year}</div>
        <div>Gender: {props.characters.gender}</div>
        <div>Weight: {props.characters.mass}</div>
        <div>Height: {props.characters.height}</div>
        <div>Skin color: {props.characters.skin_color}</div>
        <div>Eyes: {props.characters.eye_color}</div>
      </div>
    );
}


export default StarwarsComp;