import React from 'react';

const CharCards = props => {
  console.log(props.results);
  return props.results.map((element, index) => {
    return (
      <div className='char'>
      <div className='name'>{element.name}</div>
      <div className='height'>{element.height}</div>
      <div className='mass'>{element.mass}</div>
      <div className='hairColor'>{element.hair_color}</div>
      <div className='skinColor'>{element.skin_color}</div>
      <div className='eyeColor'>{element.eye_color}</div>
      <div className='birthYear'>{element.birth_year}</div>
      <div className='gender'>{element.gender}</div>
      <div className='homeworld'>{element.homeworld}</div>
      <div className='films'>{element.films.map((ele) => {return (<div>{ele}</div>)})}</div>
      <div>{element.species}</div>
      <div className='vehicles'>{element.vehicles.map((ele) => {return (<div>{ele}</div>);})}</div>
      <div className='starships'>{element.starships.map((ele) => {return (<div>{ele}</div>);})}</div>
      <div className='created'>{element.created}</div>
      <div className='edited'>{element.edited}</div>
      <div className='url'>{element.url}</div>
      </div>
      );
  });
  
};

export default CharCards;


