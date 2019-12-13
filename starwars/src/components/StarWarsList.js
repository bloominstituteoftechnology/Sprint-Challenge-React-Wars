import React, { useState, useEffect } from "react";
import Axios from "axios";
import StarWarsCard from "./StarWarsCard";

function StarWarsList() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log("Data: ", response.data.results);
                setInfo(response.data.results);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }, []);

    return (
        <div className="starwars-card">
            {info.map((char, index) => {
                return (
                    <StarWarsCard
                        key={char.index}
                        name={char.name}
                        height={char.height}
                        weight={char.mass}
                        hairColor={char.hair_color}
                        skinColor={char.skin_color}
                    />
                )
            })}
        </div>
    );
};

export default StarWarsList;