import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js'

const CharacterList = () => {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then((response) => {
        console.log(response);
        setChars(response.data.results.item);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      {chars.map(item => {
        return <CharacterCard name={name}/>;
      })}
    </div>
  );

}

export default CharacterList;
