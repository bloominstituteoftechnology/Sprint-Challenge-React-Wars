import React from 'react';
import './App.css';

const ListItem = props => {
  return props.data.results.map((item, index) => (
    <li>
    {item.name}
    {item.gender}
    {item.height}
    {item.hair_color}
   
    </li>
  ));  
};

export default ListItem;