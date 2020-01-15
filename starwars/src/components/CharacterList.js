import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList () {
    const [people, setPeople] = useState([]);
    const didUpdate = () => {

        axios
        .get('https://swapi.co/api/people')
        .then(response => {
           setPeople(response.data.results); 
           console.log(response.data.results[0]);
            
        })
        .catch(error => console.log(error));
    };
 
    useEffect(didUpdate, []);

    
    
    return (
		<div>
			{people.map((attr) => {
				return <CharacterCard attr={attr} />;
			})}
		</div>
	);
}