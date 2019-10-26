import {useState, useEffect} from 'react';
import axios from 'axios';
import CharCard from './CharCard';


const CharGenerator = () => { // make the results state
    const [swChars, setSWChars] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
        //   console.log(response);
        const swChars = response.data.results;

            setSWChars(response.data.results);
        // console.log(swChars);
        //   console.log(swChars[0]);
        //   console.log(swChars[0][1]);
        // console.log(response.data.results);
        })
        .catch(error => {
        console.log("Error: ", error);
        })
    },[]) // useEffect

    return(
    swChars.map(char => {
        // console.log(char.gender);
        // console.log(char.name);
        // console.log(CharCard(char));

        return CharCard(char);
    })

    )

    // console.log("outside");
    // console.log(swChars);
} // CharGenerator


    export default CharGenerator;