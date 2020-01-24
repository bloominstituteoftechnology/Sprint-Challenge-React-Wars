import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SWCard from './SWCard';

export default function SWList(){
    
    const[ details, setDetails ] = useState([]);

    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/')
            .then(response => {
                console.log("axios", response.data.results);
                setDetails(response.data.results);
                
            })
            .catch(err => ("error on request"));
    }, []);


return(
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
)

};







