import React from 'react';
import './CharacterData.css'

export const CharacterData = (props) => {
  return (
    <div className="CharBox">
      {props.people.map(starwarsChars => {
        return (
          <div className="Chars">
            
            <div className="Char-Name">{starwarsChars.name}</div>
            
            
            <div className="Char-Height">{starwarsChars.height}</div>
            
            
            <div className="Char-Weight">{starwarsChars.mass}</div>
            
            
            <div className="Char-BirthYear">{starwarsChars.birth_year}</div>
            
            
            <div className="Char-Gender">{starwarsChars.gender}</div>

    </div>

        )
      })}
    </div>
  )
}