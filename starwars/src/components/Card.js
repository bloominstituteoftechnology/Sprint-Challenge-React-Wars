import React from 'react';



const Card = (props) => {

  return (
    <div>
        <h1>{props.char.name}</h1>
        <h2>Birth Year:{props.char.birth_year}</h2>
        <h2>Eye Color:{props.char.eye_color}</h2>
        <h2>Gender:{props.char.gender}</h2>
        <h2>Hair Color:{props.char.hair_color}</h2>
        <h2>Height:{props.char.height}</h2>
        <h2>Mass:{props.char.mass}</h2>
        <h2>Skin Color:{props.char.skin_color}</h2>
        <h2>Homeworld:{props.char.homeworld}</h2>
        <h2>Url:{props.char.url}</h2>
        <h2>Created:{props.char.created}</h2>
        <h2>Edited:{props.char.edited}</h2>
    </div>
  );
}

export default Card;
