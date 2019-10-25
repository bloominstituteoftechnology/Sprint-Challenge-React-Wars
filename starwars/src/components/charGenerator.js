import React from 'react';
import axios from 'axios';


const CharGenerator = () => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response);
      // const gitProfile = gitCard(response.data); // send data to function, below and save for reuse
      // gitAnchor.appendChild(gitProfile) // add profile to screen
      const swChars = response.data.results;
      console.log(swChars);
    })
    .catch(error => {
      console.log("Error: ", error);
    })
}

  export default CharGenerator;