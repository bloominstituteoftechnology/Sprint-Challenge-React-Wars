import React from 'react'
import './Card.css';

const Card = props => {
  const { chars } = props;
  return(
    <div className="Card__Init">
    {chars.map(char=> {
        return (
          <div className="Card__Section">
          <ul className="Basic__AttrList">
          <li>Name: {char.name}</li>
          <li>Birth: {char.birth_year})</li>
          <li>Created-Edited: <br /> <br />
          {char.created} <br /> <br /> {char.edited}</li>
          </ul>
          <ul className="Basic__PhysicalList">
          <li>Hair Color: {char.hair_color}</li>
          <li>Eye Color: {char.eye_color}</li>
          <li>Height: {char.height}</li>
          <li>Mass: {char.mass}</li>
          <li>Skin Color: {char.skin_color}</li>
          <li>Gender: {char.gender}</li>
          </ul>
        )
        </div>
        )
      })}
    </div>
  ) 
    }

export {Card};
