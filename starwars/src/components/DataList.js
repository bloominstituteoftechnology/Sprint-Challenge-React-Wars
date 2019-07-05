import React from 'react';
import './StarWars.css';
import DataItems from './DataItems';


const DataList = props => {
  return(
    <div>
        {props.starwarslist[0].map(arrayItems => <DataItems key={arrayItems.edited} data={arrayItems}/>)}
        
    </div>
   );
};
//console.log of props.starwarslist clearly demonstrates the presence of an array
//however, if one tries to display this array, you get an error reading children cannot display an object and that an array needs to be created
//therefore, tried to map out one of the objects in the array of objects to change that singular object, say at place 0 in the array of objects, to an array. 
//ultimately just trying to display one set of characteristics per character at a time. 

export default DataList;
