import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList () {
    const [people, setPeople] = useState([]);
    const didUpdate = () => {

        axios
        .get('https://swapi.co/api/people')
        .then(response => {
           setPeople(response.data); 
           console.log(response);
            
        })
        .catch(error => console.log(error));
    };
 
    useEffect(didUpdate, []);

    
    
        const CharacterList = props => {
            return <div className="cast">{this.people.map()}</div>;
          }; 
           return <CharacterCard key people={people}/>
       
}