import React, {useState} from 'react';
import axios from 'axios';
import CharCard from './CharCard';


const CharGenerator = () => { // make the results state
    const [swChars, setSWChars] = useState([]);

    axios.get("https://swapi.co/api/people/")
    .then(response => {
    //   console.log(response);
      const swChars = response.data.results;
      console.log(swChars);
    //   console.log(swChars[0]);
    //   console.log(swChars[0][1]);
    // setSWChars(response.data.results);
    swChars.map(char => {
        // console.log(char.gender);
        // console.log(char.name);
        return CharCard(char);
    })
    })
    .catch(error => {
      console.log("Error: ", error);
    })

    // console.log("outside");
    // console.log(swChars);
}


    export default CharGenerator;