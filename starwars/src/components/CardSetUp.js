//Lets set up the grid first, this is the parent to Cards, it will go in here
//First step, import what you will need, useState, useEffect since you will be having the images sent to here in axios.
//don't forget [] so your browser doesn't crash or have the API lock you out
//make sure you have your dependencies installed such as react, axios, bootstrap (content=styled)
import React, { useState, useEffect } from "react" //import react and such to be able to use
import axios from "axios"; //import axios since we will be using it for get , then , catch

import CharCard from './CharCard' //import the child that will have the the props, and styling

// import { Container, Row } from "reactstrap"; //we will be importing some styling

//Now we will be setting up the component(machine)

const CardSetUp = () => {
 const [theChosenOne, setTheChosenOne] = useState ([]); //We aren't setting a state, so set it to an array since it is an array of information
    
 //use useEffect to get the axios call, don't forget [] to stop from repeating.
    useEffect(() => {
        
          axios
            .get("https://swapi.co/api/people")
            .then(response => { 
              console.log(response.data.results)//find the data where the characters are. Since this is an array, this is what we will be mapping over.
              setTheChosenOne(response.data.results) //this gives you back the people and their data
            })
            .catch(error => console.log("Photo not found", error))
      }, []);

 console.log(theChosenOne); //this holds the array you will be passing over
// Any component that you need to
return (
    <>
    {theChosenOne.map(item => {
        // console.log(item)
        return ( 
        <CharCard 
        key={item.url}
        nameKey={item.name}
        hairKey={item.hair_color}
        eyecolorKey={item.eye_color}
        />
        );
    })}
    </>
);

};

export default CardSetUp;

// {theChosenOne.map(theChosenOne => {
//     return (
//         <CharCard //in here we are basically making a reference point for the prop in the child
//         nameKey={theChosenOne.name}
//         hairKey={theChosenOne.hair_color}
//         skinKey={theChosenOne.skin_color}
//          />
//     );
// })}   