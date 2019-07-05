import React from 'react';
import './StarWars.css';


const DataItems = props => {
  return(
    <div>
        
      <div><h2> {props.data.name} </h2></div>
       <div> Skin Color: {props.data.skin_color}</div>
       <div>Birth Year: {props.data.birth_year}</div>
       <div>Eye Color: {props.data.eye_color}</div>
       <div>Gender: {props.data.gender}</div>
       <div>Hair color: {props.data.hair_color}</div>
       <div>Height: {props.data.height}cm</div>       
       <div>Mass: {props.data.mass}kg</div>


    </div>
     
   );
};


export default DataItems;
