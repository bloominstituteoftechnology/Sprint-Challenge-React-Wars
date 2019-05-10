import React from 'react';
import './StarWars.css';

function Item(props){
    return(
    <div className="item-card">
        <div className="item-info">
        <h3>{props.item.name}</h3>
        <p>
        <strong>Eye Color:</strong> {props.item.eye_color}
        </p>

        <p>
        <strong>Gender:</strong> {props.item.gender}
        </p>

        <p>
        <strong>Height:</strong> {props.item.height}
        </p>

     
      
        </div>
    </div>
    )
}

export default Item;