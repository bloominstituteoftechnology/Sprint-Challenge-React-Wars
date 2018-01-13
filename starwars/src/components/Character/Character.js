import React from 'react';
import './Character.css';

const Character = (props) => {
  const data = props.charData;

  return (
    <div className='Character'>
      <div className='charName'>{data.name}</div>
      <div className='charData'>
        <div><span>Appeared in:</span> {data.films.map((film, index) => {
          return (
            <a className='link link-list' href={film} target='_blank'>Movie{index + 1}</a>
          )})}
        </div>
        <div><span>Born:</span> {data.birth_year} on <a href={data.homeworld} className='link' target='_blank' >homeworld</a></div>
        <div><span>Gender:</span> {data.gender}; <span>Species:</span> <a href={data.species[0]} className='link' target='blank'>Click</a></div>
        <div><span>Height:</span> {data.height}; <span>Mass:</span> {data.mass}</div>
        <div><span>Eyes:</span> {data.eye_color}; <span>Hair:</span> {data.hair_color};<span>Skin:</span> {data.skin_color}</div>
        <div><span>Starships:</span> {data.starships.map((ship, index) => {
          return (
            <a className='link link-list' href={ship} target='_blank'>Starship{index + 1}</a>
          )})}
        </div>
        <div><span>Vehicles:</span> {data.vehicles.map((vehicle, index) => {
          return (
            <a className='link link-list' href={vehicle} target='_blank'>Vehicle{index + 1}</a>
          )})}
        </div>
      </div>
    </div>
  )
}

export default Character;