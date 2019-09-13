import React, { useState, useEffect } from "react";
import axios from "axios";


// export default function StarWars() {

//     const [wookie, setWookie]= useState({});

//     useEffect(()=> {

//     axios.get(`https://swapi.co/api/people/`)
//     .then(response => {
//         const wookie = response.data
//         console.log(`new data`, wookie);
//         setWookie(wookie);
//     })
//     .catch(error=> {
//         console.log("No data returned, error");
//     });
//     },[]);
// }

// export default function fetchPerson(id){

//     fetch(`http://swapi.co/api/people/${id}`)
//       .then( function(response){
//         return response.json()
//       })
//       .then(function(json){
//         console.log("data", json)
  
//         if (!json.name){
//           return;
//         }
  
//         const name = json.name;
//         const birth_year = json.birth_year
//     }
//       )

export default function InfoCards() {

    const [wars, setWars]= useState([]);

    useEffect(()=> {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            const starWars = response.data.message;
            console.log(starWars);
            setWars(starWars);
        })
        .catch(error => {
            console.log("No data returned", error);
        });

        

    })
    return(
        <div>
            <p>Hello</p>
        </div>
    )
}

