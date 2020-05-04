import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";


function Character() {
   const [info, setInfo] = useState([]);
    
    useEffect ( () =>{
        axios.get("https://rickandmortyapi.com/api/character/")
        
        .then(response =>{
            console.log(response.data)
           setInfo (response.data.results)
        })
        .catch(err =>{
            console.log(err)
        });
    }, []);
    
    
    return (
      <div className="Character">
       <ul>
         {info.map(info => {
           return (
            <CharacterCard
            image = {info.image}
            id = {info.id}
            name ={info.name}
            status= {info.status}
            species= {info.species}
            gender= {info.gender}
            origin= {info.origin}
            location= {info.location}
            />
           );
         })};
       </ul>
      </div>
    );
  }
  
  export default Character;