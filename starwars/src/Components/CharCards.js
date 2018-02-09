import React from 'react';

const CharCards = props => {
  console.log(props.results);
  return props.results.map((element, index) => {
    return (
      <div className='charCard' key={index}>
      <div className='characteristics'>
        <h2 className='name'>{element.name}</h2>
        <div className='height'>Height: {element.height}</div>
        <div className='mass'>Mass: {element.mass}</div>
        <div className='hairColor'>Hair Color: {element.hair_color}</div>
        <div className='skinColor'>Skin Color: {element.skin_color}</div>
        <div className='eyeColor'>Eye Color: {element.eye_color}</div>
        <div className='birthYear'>Birth Year: {element.birth_year}</div>
        <div className='gender'>Gender; {element.gender}</div>
      </div>
      <div className='otherInfo'>
        <h2>Other Information</h2>
        <a className='homeworld' href={element.homeworld} target='_blank'>{element.homeworld}</a>
        <div className='films'>{element.films.map((ele, index) => {return (<a href={ele} target='_blank' key={index}>{ele}</a>)})}</div>
        <a className='species' href={element.species} target='_blank'>{element.species}</a>
        <div className='vehicles'>{element.vehicles.map((ele, index) => {return (<a href={ele} target='_blank' key={index}>{ele}</a>);})}</div>
        <div className='starships'>{element.starships.map((ele, index) => {return (<a href={ele} target='_blank' key={index}>{ele}</a>);})}</div>
        <div className='created'>{element.created}</div>
        <div className='edited'>{element.edited}</div>
        <a className='url' href={element.url} target='_blank'>{element.url}</a>
      </div>
      </div>
      );
  });
  
};

export default CharCards;


