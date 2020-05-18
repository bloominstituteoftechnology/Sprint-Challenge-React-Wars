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
            location={character.location}
            status={character.status}
            gender={character.gender}
            species={character.species}
            image={character.image}
            />
})}
    </div>
    )
}
export default Character;
