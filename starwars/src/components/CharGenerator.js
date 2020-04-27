import {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard';


const CharGenerator = () => { // make the results state
    const [swChars, setSWChars] = useState([]);

    useEffect(() => {
        // axios.get("https://non-cors.herokuapp.com/https://swapi.co/api/people/")
        // axios.get("https://cors-anywhere.herokuapp.com/https://non-cors.herokuapp.com/https://swapi.co/api/people/")
        axios.get("https://non-cors.herokuapp.com/https://swapi.dev/api/people/")
        .then(response => {
            setSWChars(response.data.results);
        })
        .catch(error => {
            console.log("Error: ", error);
        })
    },[]) // useEffect

    return(
        swChars.map(char => {
            return CharCard(char);
        })
    ) // outside return
} // CharGenerator 

    export default CharGenerator;