import React from 'react';
import Character from './Character';
import './StarWarsCharacters.css';

export const StarWarsCharacters = (props) => {
    return (
      <div className="StarWarsCharacters">
        {props.charList.map((item => {
          return <Character key={item.id} character={item} />
        }))}
      </div>
    )
  };