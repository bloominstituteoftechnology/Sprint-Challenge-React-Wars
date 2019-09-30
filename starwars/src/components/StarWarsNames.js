import React, {useState, useEffect} from 'react';
import axios from "axios";
import NameList from "./NameList";

export default function StarWarsNames() {
  const [names, setNames] = useState ([]);

 
  useEffect (() => {
    axios
      .get ("https://swapi.co/api/people/")
      .then( result => {
        setNames(result.data.results)
        console.log(result);
      })
      .catch( err =>{
        console.log(err);
      })
  }, []);

  return(
    
        <div className = 'names'>
          {names.map((star) => {
          return (
            <NameList 
             
              name={star.name}
              gender={star.gender}
              height={star.height}
              key={star.id}
              hair_color={star.hair_color}
            />
          )}
        )}
        </div>
     
  );
}