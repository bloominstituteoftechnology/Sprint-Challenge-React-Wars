// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

const Character = () => {

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        axios
        .get(`https://rickandmortyapi.com/api/character/?page={page}`)
        .then(response => {
            console.log(response.data.results)
            setCharacters(response.data.results)
        })
        .catch(error => console.log("Error!", error))
    }, []);
    return (
        <div className="card-grid">
        {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
        </div>
    )
}
export default Character;