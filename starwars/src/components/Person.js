import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character"

export default function Person(){
     
    const [char, setChar] = useState([]);

    useEffect(() => {

        axios

        .get("https://swapi.co/api/people/?page=1")

        .then(response => {
            console.log(response.data.results);
            setChar(response.data.results);
        })

        .catch(error => {
            console.log("Error: ", error);
        })
    });

    return(
        <div>
            {char.map((character, i) => {

                return <Character

                key={i}

                name={character.name}

                birth_year={character.birth_year}

                height={character.height}

                hair_color={character.hair_color}

                eye_color={character.eye_color} 

                />
            })}
        </div>
    );
}