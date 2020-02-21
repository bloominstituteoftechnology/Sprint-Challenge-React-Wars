import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard'

export default function CharList(){
const [state, setState] = useState([])

useEffect(() => {
    axios
        .get("https://swapi.co/api/people/?page=1")
        .then( response => {
            setState(response.data.results);
            console.log(response.data);
           // console.log(state)
        })
        .catch(error =>{
            console.log("Error", error )
        })
}, [])

return (
    <div>
         {state.map(character => { 
         return <CharCard name={character.name} birth={character.birth_year}/>;
       })}
    
    </div>
)
}

//<CharCard state={state}/>