import React from "react";
import CharacterFilm from "./CharacterFilm";

const CharacterFilmGroup = props => {
  return (
    <div>
      CHARACTER FILM GROUP
      <CharacterFilm />
      {/* Loop over all current character films*/}
    </div>
  );
};

export default CharacterFilmGroup;
