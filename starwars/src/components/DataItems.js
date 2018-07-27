import React from 'react';
import './StarWars.css';


const DataItems = props => {
  return(
    <div>
       {props.data.name}
       {props.data.skin_color}
       {props.data.vehicles}
       {props.data['birth-year']}
       {props.data.created}
       {props.data.edited}
       {props.data.eye_color}
       {props.data.films}
       {props.data.gender}
       {props.data.hair_color}
       {props.data.height}
       {props.data.homeworld}
       {props.data.mass}

    </div>
     
   );
};


export default DataItems;
