import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Character() {
const [characterInfo, setCharacterInfo] = useState([]);

useEffect(() =>{
axios
.get('https://swapi.co/api/people')
.then(response => {
    console.log(response.data.results);
    setCharacterInfo(response.data.results)
})
.catch(error => {
    console.log('Data was not returned', error)
})
}, []);

return (
    null
)

}