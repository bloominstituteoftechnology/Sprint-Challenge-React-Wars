// Use  name, birth_year, gender, height, mass, eye_color, hair_color, skin_color, created, edited, 
import React from 'react';

import './Cards.css';

const Cards = props => {
    return (
        <div className="Card">
            <div style={{ color: 'white' }} className="Card__Name">
                { props.name.toUpperCase() } 
            </div>
            <div className="Card__Section1">
                <p style = {{color: 'orange'}}> GENDER: { props.gender.toUpperCase() } </p>
                <p style = {{color: 'orange'}}> BIRTH YEAR: { props.birth_year } </p>
            </div>
            <div className="Card__Section2">
                <p style = {{color: 'lightblue'}} className="Card__Height"> HEIGHT: { props.height } </p>
                <p style = {{color: 'lightblue'}}> WEIGHT: { props.mass} </p>
            </div>
            <div className="Card__Section3 Card__Section2">
                <p style = {{ color: 'orange' }} className="Card__Border"> EYE COLOR { props.eye_color.toUpperCase() } </p>
                <p style = {{ color: 'orange' }} className="Card__Border"> HAIR COLOR { props.hair_color.toUpperCase() } </p>
                <p style = {{ color: 'orange' }}> SKIN COLOR { props.skin_color.toUpperCase() } </p>
            </div>
        </div>
    )
}

export default Cards;
