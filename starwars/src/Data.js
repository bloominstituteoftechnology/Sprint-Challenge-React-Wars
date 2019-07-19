import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Card'

function Data() {
    // Values related to SWAPI
    const swapi = 'https://swapi.co/api'
    const swapiCategory = 'people'
    
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get(`${swapi}/${swapiCategory}/`)
        .then(response => {
            console.log('SWAPI online:', response)
            const data = response.data.results
            setCharacters(data)
        })
        .catch(error => {
            console.log('API retrieval failed:', error)
        })
    }, [])

    return (
        <div className='card-grid'>
            {characters.map(char=> (
                <Card name={char.name} height={char.height} mass={char.mass} hairColor={char.hair_color} eyeColor={char.eye_color} skinColor={char.skin_color} birthYear={char.birth_year} gender={char.gender} homeWorld={char.homeworld}/>
            ))}
        </div>
    )
}

export default Data