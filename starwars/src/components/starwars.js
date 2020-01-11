import React, { useEffect, useState } from 'react';
import axios from "axios";



const [warsData, setWarsData] = useState([])

  useEffect(() => {
    axios
        .get ("https://swapi.co/api/people/")
        .then (response => {
            setWarsData(response.data);
        })
        .catch(error => console.log("The data was not returned", error));
}, [])

console.log("wars data: ", warsData);