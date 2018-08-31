import React, { Component } from 'react';

const StarWarsData = props => {
    return(
    <div className="data-card">
            Name: {props.starwarsChars.name} <br/>
       Birth Year: {props.starwarsChars.birth_year} <br/>
            Gender: {props.starwarsChars.gender}
    </div>
    );
};

export default StarWarsData;