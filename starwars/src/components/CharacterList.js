import React from 'react';
import CharacterCard from './CharacterCard';
import './CharacterList.css'

// mapped over characters on props to render on characterCard w name, eyecolor and character height
const CharacterList = props => {
    return (
      <div className= "CardList-Container">
        {props.chars.map(char => {
            return <CharacterCard key={char.url} char={char} />    
        })}     
      </div>
    );

};


export default CharacterList;