import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grid1({ limit }) {
    const [films, setFilm] = useState([])
    
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/2/`)
        .then(res => {
            console.log(res);
            // console.log('film fired', res.data.results[0]);
            // films.forEach(function(){
            //     console.log(films)
            // })
            const films = res.data.films
            setFilm(films)
        })
    }
    , [])

    return (
        <div className='film'>
            <h4>Played in these movies</h4>
            {films[0]} <br/>
            {films[1]}<br/>
            {films[2]}<br/>
            {films[3]}<br/>
            {films[4]}<br/>
            {films[5]}
        </div>
    )
}

