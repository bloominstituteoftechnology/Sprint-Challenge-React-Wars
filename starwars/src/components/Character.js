import React from 'react';
import './StarWars.css';

const Character = props => {
    return (
    <div className="text-box">
        {/* <div className="image-container">
            <img className="my-image" src="http://worldwideinterweb.com/wp-content/uploads/2016/11/celebrities-in-star-wars.jpg" alt="Avatar"/>
        </div> */}
        <h4 className="char-names"><b>{props.mychar.name}</b></h4>
        <ul className="unordered-list">
            <li className="properties">height: {props.mychar.height}</li>
            <li className="properties">mass: {props.mychar.mass}</li>
            <li className="properties">hair color: {props.mychar.hair_color}</li>
            <li className="properties">skin color: {props.mychar.skin_color}</li>
            <li className="properties">eye color: {props.mychar.eye_color}</li>
            <li className="properties">birth year: {props.mychar.birth_year}</li> 
        </ul>
        {/* <p>{ JSON.stringify(props.mychar, null, 2) }</p> */}
    </div>
    );
}

export default Character;