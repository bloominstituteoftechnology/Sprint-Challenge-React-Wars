import React from 'react';

const starWarsDisplay = props => {
    return (
        <div className="starwars-display">
            <div className="display-char">
                {/* <h1>{props.name}</h1>
                <p>birthYear={props.birthYear}</p>
                <p>eyeColor={props.eyeColor}</p>
                <p>gender={props.gender}</p>
                <p>hairColor={props.hairColor}</p>
                <p>height={props.height}</p>
                <p>mass={props.mass}</p>
                <p>skinColor={props.skinColor}</p>
                <p>species={props.species}</p>
                <p>homeworld={props.homeworld}</p>
                <p>created={props.created}</p>
                <p>edited={props.edited}</p>
                <p>url={props.url}</p> */}
            </div>
            <div className="display-img">
                <img src={props.film}/>
                <img src={props.starship}/>
                <img src={props.vehicle}/>
            </div>
        </div>
    );
};

export default starWarsDisplay;