import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsModal from "./StarWarsModal";

export default function StarWarsBase(){
    const [starWars, setStarWars]=useState([]);
    const [category, setCategory]=useState("people");
    

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/${category}/`)
            .then(result=>{
                // const starWarsEl=result.data.results;
                setStarWars(result.data.results);
            })
            .catch(err => {
                console.log(err);
              });
    }, [category]);

    return(
        <div>
            <select onChange={e => setCategory(e.target.value)}>
                <option>people</option>
                <option>species</option>
                <option>planets</option>
            </select>
            {starWars.map(starWar=>{
                return <StarWarsModal key={starWar.name} category={category} starWar={starWar} />
            })}
        </div>
    )
}