import {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard';


const CharGenerator = () => { // make the results state
    const [swChars, setSWChars] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
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