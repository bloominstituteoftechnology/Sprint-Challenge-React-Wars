import React from 'react';
import './SWCharsContainer.css';

function SWCharsContainer(props) {
  const character = props.char;
  return (
    <div className="container">   {/* main div for return */}
      <div>
        <h2><a href={character.url} target={'_blank'}>{character.name}</a></h2>
        <h4>Appeared in films: {character.films.map((film, i) => {
          return (
            <div className="div-spacing"><a href={film} target={'_blank'}>{i}</a></div>
          )
        })}</h4>
        <h4>&nbsp;--- Origin ---</h4>
        <h4>Born in {character.birth_year}</h4>
        <h4>View <a href={character.species[0]} target={'_blank'}>species</a> and <a href={character.homeworld} target={'_blank'}>homeworld</a> information.</h4>
        <h4>&nbsp;--- Attributes ---</h4>
        <h4>Character is {character.gender === 'n/a' ? 'characterized as male' : character.gender} with a {character.skin_color} complexion.</h4>
        <h4>{character.gender === 'female' ? 'She' : 'He'} has {character.eye_color} eyes
          and {character.hair_color != 'n/a' ? character.hair_color : 'no'} hair.</h4>
        <h4>{character.gender === 'female' ? 'She' : 'He'} is {character.height} cm tall and weighs {character.mass} kg.</h4>
        <h4>&nbsp;--- Pilot Info ---</h4>
        <h4>Starships: {character.starships.map((starship, i) => {
          return (
            <div className="div-spacing"><a href={starship} target={'_blank'}>{i}</a></div>
          )
        })}</h4>
        <h4>Vehicles: {character.vehicles.map((vehicle, i) => {
          return (
            <div className="div-spacing"><a href={vehicle} target={'_blank'}>{i}</a></div>
          )
        })}</h4>
        <h4>&nbsp;--- Archive Info ---</h4>
        <h4>Archive record created: {character.created}</h4>
        <h4>Archive record updated: {character.edited}</h4>
        <h2>&nbsp;</h2>
      </div>
    </div>
  )
}

export default SWCharsContainer;