import React from 'react';
import './Profile.css';

const StarWarsProfile = (props) => {
    return (
        <div>
        {props.starwarsChars.map((info) => {
             return (
                 <div className='display'>
                 <h3>{info.name}</h3>
                 <ul className='flexp'> 
                     <li> Birthdate: {info.birth_year} </li>
                     <li> Gender: {info.gender} </li>
                     <li> Height: {info.height} </li>
                 </ul>
                 </div>
             )
        })}
        </div>
    );

}

export default StarWarsProfile;