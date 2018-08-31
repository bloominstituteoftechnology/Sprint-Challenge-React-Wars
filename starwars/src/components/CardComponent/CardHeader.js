import React, { Component } from 'react';
import './Card.css';

export default function CardHeader(props) {

    return (
      <div className="card-header">
       <h1>{ props.starwarsChars[0]["name"] }</h1>
       <h2>Created: { props.starwarsChars[0]["created"] }</h2>
       <h2>Edited: { props.starwarsChars[0]["edited"] }</h2>
      </div>
    );

}
