import React, { Component } from 'react';
import './Card.css';

export default function CardHeader(hProps) {

    return (
      <div className="card-header">
       <h1>{ hProps.name }</h1>
       <h2>Created: { hProps.created }</h2>
       <h2>Edited: { hProps.edited }</h2>
      </div>
    );

}
