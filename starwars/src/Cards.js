import React, { Component } from 'react';
import Card from './Card';

const Cards = (props) => {
  return (
    <div className="CardBox">
      {props.chars.map((char, i) => {
        return <Card key={i} char={char} />
      })}
    </div>
    )
}

export default Cards;