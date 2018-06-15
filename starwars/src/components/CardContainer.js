import React from "react";
import CharacterCard from "./CharacterCard";

const CardContainer = props => {
  // console.log(props.currentSorted);
  // let currentSorted = props.currentSorted;

  // const sorting = () => {
  //   if (currentSorted === "all") {
  //     props.characters.map(character => {
  //       return <CharacterCard character={character} key={character.url} />;
  //     });
  //   } else {
  //     let sortedCharacterList = [];
  //     for (let i = 0; i < props.characters.length; i++) {
  //       for (let j = 0; j < props.characters[i].films.length; j++) {
  //         if (props.characters[i].films[j] === currentSorted) {
  //           sortedCharacterList.concat(props.characters[i]);
  //         }
  //       }
  //     }
  //     sortedCharacterList.map(character => {
  //       return <CharacterCard character={character} key={character.url} />;
  //     });
  //   }
  // };

  return (
    <div>
      CARD CONTAINER
      {/* MAP THROUGH ALL CHARACTER CARDS SORT BY FILM */}
      {/* {sorting()} */}
      {props.characters.map(character => (
        <CharacterCard character={character} key={character.url} />
      ))}
    </div>
  );
};

export default CardContainer;
