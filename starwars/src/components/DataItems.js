import React from 'react';
import './StarWars.css';


const DataItems = props => {
  return(
    <div>
        
       <p>Name: {props.data.name}</p>
      <p>Skin Color: {props.data.skin_color}</p>
       <p>Birth Year: {props.data['birth-year']}</p>
       <p>Eye Color: {props.data.eye_color}</p>
       <p>Gender: {props.data.gender}</p>
       <p>Hair color: {props.data.hair_color}</p>
       <p>Height: {props.data.height}</p>       
       <p>Mass: {props.data.mass}</p>


    </div>
     
   );
};


export default DataItems;
