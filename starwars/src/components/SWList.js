import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SWCard from './SWCard';

export default function SWList(){
    
    const[ details, setDetails ] = useState([]);
    const[ query, setQuery ] = useState("");

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log("axios", response);
                setDetails(response.data.results.filter(character => 
                    character.name.toLowerCase().includes(query.toLowerCase())));
                console.log("details", details)
                
            })
            .catch(err => ("error on request"));
    }, [query]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    }


return(
<div>
    <form>
    <input
    type="text"
    onChange={handleInputChange}
    value={query}
    name="name"
    tabIndex="0"
    className="promptSearchName"
    placeholder="search by name"
    autoComplete="off"
    />
  </form>
  




    <div>
        {details.map(value => <SWCard
            name={value.name}
            born={value.born}
            gender={value.gender}
            height={value.height}
            hairColor={value.height}
            eyeColor={value.eye_color}
            key={value.index}
            
            
            />)}
    </div>
  </div>  
)

};







