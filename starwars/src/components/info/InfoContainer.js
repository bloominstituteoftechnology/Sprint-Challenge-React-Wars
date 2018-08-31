import React from 'react';
import './info.css';

const InfoContainer = (props) => {
    return (
        <div className="info-container">
            <div className="name">
                <h1>Name: <a href={props.starwarsChar.url}>{props.starwarsChar.name}</a></h1>
                <h2>Homeworld: <a href={props.starwarsChar.homeworld}>{props.starwarsChar.homeworld}</a></h2>
            </div>
            <div className="demographics">
                <h4>
                Birth Year: {props.starwarsChar.birth_year}<br />
                Skin Color: {props.starwarsChar.skin_color}<br />
                Gender: {props.starwarsChar.gender}
                </h4>
            </div>
            <div className="films">
                <ul>
                    {props.starwarsChar.films.map(film => 
                        <li>Film: <a href={film}>{film}</a></li>)}
                </ul>
            
            </div>
            
            
        </div>
    )
}

export default InfoContainer;