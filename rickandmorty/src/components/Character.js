// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';


const Character = () => {

    const [page, setPage] = useState('https://rickandmortyapi.com/api/character/?page=1');
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);

    const getPageNumber = (str = '') => {
        if (str === '') {
            return '';
        }
        return str.split('https://rickandmortyapi.com/api/character/?page=')
    }

    useEffect(() => {
        axios
            .get(page)
            .then(response => {
                setCharacters(response.data.results)
                setInfo(response.data.info)


            })
            .catch(error => console.log("Error!", error))
    }, [page]);
    return (
        <div className="holder">
        <div className="nav">
        {info.prev !== '' &&
        <button onClick={()=>{
            setPage(info.prev)
        }}>Previous</button>}
<p className="page">{getPageNumber(page)} of {info.pages}</p>
{info.next !== ''&&
    <button onClick={()=>{
            setPage(info.next)
        }}>Next</button>}

    </div>
        <div className="card-grid">

            {console.log(info.next)}
        <div className="holder">
                <div className="nav">
                    {info.prev !== '' &&
                        <button onClick={() => {
                            setPage(info.prev)
                        }}>Previous</button>}
                    <p className="page">{getPageNumber(page)} of {info.pages}</p>
                    {info.next !== '' &&
                        <button onClick={() => {
                            setPage(info.next)
                        }}>Next</button>}
                </div>

            <div className="card-grid">

                {characters.map(character => (
                    <CharacterCard key={character.id} character={character} />
                ))}

            </div>
        </div>


    )
}

export default Character;

