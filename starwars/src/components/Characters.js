import React from 'react';

const Characters = props =>{
    return (
    <React.Fragment>
        
      <h1 className="name"> {props.characters.name}<br/></h1>  
      <h3 className="bio">
      Gender: {props.characters.gender},
      Hair color: {props.characters.hair_color},
      Height: {props.characters.hight},
      Mass: {props.characters.mass}kg,
      Skin Color: {props.characters.skin_color},
      Home World: {props.characters.homeworld},
      Eye Color: {props.characters.eye_color},
      Birth Year: {props.characters.birth_year}
      <br/>
      </h3> 
      <h3 className='films'> 
      Films: {props.characters.films}<br/>
      </h3>
      <h3 className='species'>
      Species: {props.characters.species}<br/>
      </h3>

      <h3 className='vehicles'>
      Vehicles: {props.characters.vehicles}
      <br/>
      </h3>
      <h3 className='starships'>
      Starships: {props.characters.starships}
      <br/>
      </h3>
      <h3>
      Created At: {props.characters.created}<br/>
      Edited At: {props.characters.edited}<br/>
      Url: {props.characters.url}
      <br/>
      </h3>
      </React.Fragment>  
    )
}
export default Characters;