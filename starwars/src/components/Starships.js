import React, {useState, useEffect} from 'react';
import axios from 'axios';



export default function Starships() {
    const[starship, setStarship] =useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/starships')
        .then(response =>{
            // console.log(response.data.results);
            setStarship(response.data.results);
        })
    }, []);

    return(
        <div className='starshipsCard'>
           ( 
           {starship.map((item, index) => {
                return null
            })}
           )
        </div>
    )
}

