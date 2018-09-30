import React, { Component } from 'react';
import Char from './Char';


const CharList = (props) => {
    return (
        <div className = "charlist-wrapper">
            {props.starwarsChars.map(characters => {
                return (
                    <Char 
                    name={character.name}
                    gender={character.gender}
                    height={character.height}
                    skin={character.skin_color}
                    hair={character.hair_color} 
                    />
                );
                
            })}
        </div>
    );


}

export default CharList;