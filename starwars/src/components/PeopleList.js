import React, { useEffect, useState } from 'react';
import axios from "axios";
import PersonCard from "./PersonCard";


export default function PeopleList(){

    const [personData, setPersonData] = useState([])

    useEffect(() => {
        axios
            .get ("https://swapi.co/api/people/")
            .then (response => {
                setPersonData(response.data.results);
            })
            .catch(error => console.log("The data was not returned", error));
    }, [])

    console.log("people data: ", personData);

    return (
        <div className="person">
            {personData.map((person, index) => {
                return <PersonCard 
                key={index}
                name={personData.name}
                height={personData.height}
                mass={personData.mass}
                />
            })}

        </div>
    )

}