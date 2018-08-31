import React, { Component } from 'react';

const StarWarsData = props => {
    return(
    <div className="data-card">
            Name: {props.starwarsChars.name} <br/>
       Birth Year: {props.starwarsChars.birth_year} <br/>
            Gender: {props.starwarsChars.gender}<br/>
            Eye-Color: {props.starwarsChars.eye_color}<br />
            Hair-Color: {props.starwarsChars.hair_color}<br />
            Height: {props.starwarsChars.height}<br />
            Skin-Color: {props.starwarsChars.skin_color}<br />
    </div>
    );
};

export default StarWarsData;