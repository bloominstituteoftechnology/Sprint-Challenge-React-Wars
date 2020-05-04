import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./Character";

function GetSWData() {
  const [data, setData] = useState([]);

useEffect(()=> {
    axios.get('https://swapi.py4e.com/api/people/')
    .then(res => {
        setData(res.data.results);
        console.log(setData(res.data.results));
    })
}, [])

return(
    <div>
        <div>
            {data.map(char => {
                return(
                    <CharacterCard card={char} key={char.name}/>
                );
            })}
        </div>
    </div>


)
}

export default GetSWData;