import React from 'react';
import './StarWars.css';


const DataItems = props => {
  return(
    <div>
        {props.data.birth_year}
    </div>
     
   );
};


export default DataItems;
