import React from "react";
import StarWarsCharacter from "./StarWarsCharacter";

function CharactersFilm(props) {
        <div>
            {props.charactersInfo.map(film => {
                return <Characters charactersFilm={film}/>
            })}
        </div>
}

export default CharactersFilm;