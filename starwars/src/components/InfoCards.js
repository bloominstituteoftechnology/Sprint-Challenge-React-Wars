import React, {useState, useEffect} from "react";
import axios from "axios";


export default function StarWars() {

    const [wookie, setWookie]= useState({});

    useEffect(()=> {

    axios.get(`https://swapi.co/api/people/`)
    .then(response => {
        const wars = response.data
        console.log(`new data`, wars);
        setWookie(wookie);
    })
    .catch(error=> {
        console.log("No data returned, error")
    });
    },[]);
}