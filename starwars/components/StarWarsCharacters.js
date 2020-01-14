import React, { useEffect, useState } from 'react';
import axios from 'axios';


useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(response => {
        setStarWarsCharacters(response.data)
    })
    .catch( err => console.log(err));
}, []);


export default StarWarsCharacters