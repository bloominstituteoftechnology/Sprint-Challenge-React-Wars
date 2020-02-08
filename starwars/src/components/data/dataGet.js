import React, {useState, useEffect} from "react";
import PageCreate from "../pageCreate/pageMake";
import CardCreate from "../characterCardCreate/characterCreate";
import axios from "axios";
//get data on the same page as the assembly constructor. (return the finished product to app from this folder)
//declaring function to get data
function GetData() {
  //creating hook with two params, character and setChar, inital state is set to an array
   const [character, setChar] = useState([]);
   //decalring useEffect function and accessing current state
   useEffect(() => {
     //getting data from api endpoint

     axios.get('https://swapi.co/api/people/?format=json')
     //evaluating a function on the response from that server if successful
     .then(response =>{
       //setting character equal to response.data
console.log(response.data.results);
       
         setChar(response.data.results);


     })
     //checking for error
     .catch(error => {
       console.log(error)
     })



   },
   //stopping infinite loop somehow?
   []);

//returning desired result from GetData
   return(
//passing response.data trhough props in PageCreate
    <CardCreate character ={character}/>


   )
}
//exporting GetData
export default GetData;
