import React from 'react';
import './StarWars.css';
import DataItems from './DataItems';


const DataList = props => {
  return(
    <div>
        {props.starwarslist.map(arrayItems => <DataItems key={arrayItems.edited} data={arrayItems}/>)}
    </div>
   );
};


export default DataList;
