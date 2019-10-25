import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import axios from 'axios';
import App from './App';

// axios.get("https://swapi.co/api/people/")
//   .then(response => {
//     console.log(response);
//     // const gitProfile = gitCard(response.data); // send data to function, below and save for reuse
//     // gitAnchor.appendChild(gitProfile) // add profile to screen
//     const swChars = response.data.results;
//     console.log(swChars);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   })





ReactDOM.render(<App />, document.getElementById('root'));
