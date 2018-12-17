import React, { Component } from 'react';
import CardContent from './CardContent.js';

import './Card.css';

export default function CardContainer(props) {
    return (
      props.starwarsChars.map(char => <CardContent
                                       name={char.name}
                                       created={char.created}
                                       edited={char.edited}
                                       eye_color={char.eye_color}
                                       gender={char.gender}
                                       hair_color={char.hair_color}
                                       height={char.height}
                                       homeworld={char.homeworld}
                                       mass={char.mass}
                                       skin_color={char.skin_color}
                                       url={char.url}
                                       films={char.films}
                                       species={char.species}
                                       starships={char.starships}
                                       vehicles={char.vehicles}
                                       />
                              )
        );
}
