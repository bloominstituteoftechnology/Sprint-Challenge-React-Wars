import React from "react";
// import "./StarWars.css";

// import StarwarsCharactersComponents from "./StarwarsCharactersComponents";

const CharacterList = (props) => {
  console.log(props)
  console.log(props.characters)
  return (
    <div>
      {props.characters.map(char => (
        // <CharacterList char={starwarsChar} />
        <div className='characterCard'>
          <div>{char.name}</div>
          <div className='attributes'>
            <div>{char.height}</div>
            <div>{char.birth_year}</div>
            <div>{char.created}</div>
            <div>{char.hair_color}</div>
            <div>{char.homeworld}</div>
            <div>{char.mass}</div>
            <div>{char.skin_color}</div>
            <div>{char.gender}</div>
            <div>{char.eye_color}</div>
          </div>
        </div>

      ))}
    </div>
  );
};

export default CharacterList;