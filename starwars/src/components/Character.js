// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const Character = () =>{


 const [character, setCharacter] = useState([])
      useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
            console.log(response.data.results);
            setCharacter(response.data.results);
  })
      .catch(error => {
             console.log(error);
  });
}, []);
return (
    <div>
        {character.map(character => {
            return  <CharacterCard 
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            location={character.location}
            />
})}
    </div>
    )
}
export default Character;
