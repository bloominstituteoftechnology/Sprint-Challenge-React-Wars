import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then((response) => {
        setChars(response.data.results);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div className='chars'>
      {chars.map(char => {
        console.log(char);
      })}
    </div>
  )

}

export default CharacterList;
