import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {

  const [chars, setChars] = useState([]);

  useEffect((props) => {
    axios.get("https://swapi.co/api/people/")
      .then((response) => {
        console.log(response.data.results.name);
        setChars(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      {chars.map(name => {
        return name;
      })}
    </div>
  );

}

export default CharacterList;
