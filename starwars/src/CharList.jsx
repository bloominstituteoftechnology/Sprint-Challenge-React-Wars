import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard'

export default function CharList(){
const [state, setState] = useState([])

useEffect(() => {
    axios
        .get("https://swapi.co/api/people/1/")
        .then( response => {
            setState(response.data);
            console.log(response);
        })
        .catch(error =>{
            console.log("Error", error )
        })
}, [])

return (
    <div>
     <CharCard state={state}/>
    </div>
)
}