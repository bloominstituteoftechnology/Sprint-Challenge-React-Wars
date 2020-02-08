import React, { useState, useEffect } from "react";
import StarWarsCard from "./StarWarsCard";

function StarWarsList() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people')
        .then(response => {
            setList(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log("the data was not returned", error)
        })
    }, [])
    return (
        <div>
            {list.map(item => {
                return (
                    <StarWarsCard
                    key={item.id}
                    name={item.name}
                    birth_year={item.birth_year}
                    gender={item.gender} />
                )
            })}
        </div>
    )
}

export default StarWarsList;