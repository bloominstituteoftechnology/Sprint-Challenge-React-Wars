import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';



export default()=>{
    const [ characters, setCharacters ] =useState(); 

    useEffect(() =>{
        axios.get(`http swapi.py4e.com/api/planets/1/`)
        .then((response) =>{
            console.log (response.data)
            setCharacters(response.data.value)
}) 

        

    },[])

}