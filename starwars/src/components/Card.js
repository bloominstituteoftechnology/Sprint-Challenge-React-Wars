import React from 'react';
import './Card.css';
const Card = (props) => {
    
    let a = props;
    return(
        <div className="Card">
            <h2>{a.name}</h2>
            <hr/>
            <div className="Card_Info">
                <div>height: {a.height}</div>
                <div>mass: {a.mass}</div>
                <div>hair color: {a.hair_color}</div>
                <div>skin color: {a.skin_color}</div>
                <div>gender: {a.gender}</div>
                
            </div>
            <br/>
            
        </div>
    )
}

export default Card;