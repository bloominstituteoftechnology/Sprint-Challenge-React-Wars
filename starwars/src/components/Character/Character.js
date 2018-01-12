import React from 'react';
import './Character.css';

const Character = (props) => {
  const data = props.charData;

  return (
    <div className='Character'>
      <div className='charName'>{data.name}</div>
      <div className='charData'>
        <div>Born: {data.birth_year} on <a href={data.homeworld} target='_blank' >homeworld</a></div>
        <div>Gender: {data.gender}; Species: <a href={data.species[0]} target='blank'>Click</a></div>
        <div>Height: {data.height}; Mass: {data.mass}</div>
        <div><span>Eyes:</span> {data.eye_color}; Hair: {data.hair_color}; Skin: {data.skin_color}</div>
      </div>
    </div>
  )
}

export default Character;