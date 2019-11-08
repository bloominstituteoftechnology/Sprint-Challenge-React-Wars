import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

function StarWarsData() {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            console.log(response.data.results)
            setHeroes(response.data.results)
        })
        .catch(error => {
            console.log('boooooooo', error)
        })
    }, [])

    return (
        <div className="film">
            {heroes.map(stars => {
                return (
                    <StarWarsCard
                        key={stars.id}
                        name={stars.name}
                        height={stars.height}
                        mass={stars.mass}
                        gender={stars.gender}
                    />
                )
            })}

        </div>
    );

}


export default StarWarsData;
