import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function PeopleCard(){

    const [peopleData, setPeopleData] = useState([])

    useEffect(() => {
        axios
            .get ("https://swapi.co/api/people/")
            .then (response => {
                setPeopleData(response.data);
            })
            .catch(error => console.log("The data was not returned", error));
    }, [])

    console.log("people data: ", peopleData);

    return (
        <div className="people-card">
            <h2>{peopleData.name}</h2>
        </div>
    )

}