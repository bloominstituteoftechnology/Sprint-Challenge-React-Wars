import React from 'react';
import './CharacterData.css'

export function CharacterData(props) {
  const chars = props.chars;
  return (
    <div className="CharBox">
      <div className="Chars">
            
        <div className="Char-Name">Name: {chars.name}</div>
            
            
        <div className="Char-Height">Height: {chars.height}</div>
            
            
        <div className="Char-Weight">Weight: {chars.mass}</div>
            
            
        <div className="Char-BirthYear">Birth Year: {chars.birth_year}</div>
            
            
        <div className="Char-Gender">Gender: {chars.gender}</div>

      </div>
    
    </div>
  )
}