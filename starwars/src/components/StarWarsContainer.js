import React, {useState, useEffect}  from 'react';
import axios from 'axios';
export default function StarWarsContainer () {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.co/api/people')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log('The data was not returned', error);
        });
    }, []);
    
    return (
            <div>
                {/* {character.map(c => {
                    return (
                        <StarWars
                        key={c.mass}
                        name={c.name}
                        height={c.height}
                        hair={c.hair_color}
                        skin={c.skin_color}
                        eyes={c.eye_color}
                        dob={c.birth_year}
                        gender={c.gender}
                        />
                    );
                })} */}
            </div>
        );
}