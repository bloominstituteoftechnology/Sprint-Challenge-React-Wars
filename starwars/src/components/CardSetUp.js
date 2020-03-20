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
    
 axios
    .get("")
 
 
 
    return (
        null //a component has to return something or else it will give you an error.
    );
};

export default CardSetUp;