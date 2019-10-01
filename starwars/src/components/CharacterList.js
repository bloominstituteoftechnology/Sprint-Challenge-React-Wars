import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard.js'
import axios from 'axios';

const CharacterList = () => {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/1")
      .then((response) => {
        const chars = response.data;
        setChars(chars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {chars.map(char => {
        return (
          <CharacterCard
            name={char.name}
            key={char.id}
          />
        )
      })}
    </div>
  );

}

export default CharacterList;
