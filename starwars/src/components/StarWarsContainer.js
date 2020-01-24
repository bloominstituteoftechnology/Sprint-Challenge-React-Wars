// note to self: this project is broken because starwars won't let me access their api. Do not refer to this for future projects.


import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import StarWars from './StarWars';



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
              
                   
                        <StarWars
                        key={3}
                        name={'Luke Skywalker'}
                        height={'5-11'}
                        hair={'brown'}
                        skin={'light'}
                        eyes={'blue'}
                        dob={'2023'}
                        gender={'Male'}
                        />
                   
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
                })}  */}
              
            </div>
        );
}