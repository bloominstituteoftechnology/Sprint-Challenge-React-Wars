import React, { Component } from 'react';

const StarWarsData = props => {
    return(
    <div className="data-card">
       Name: {props.starwarsChars.key} <br/>
       Birth Year:{props.birth_year} <br/>
       Gender:{props.gender}
    </div>
    );
};

export default StarWarsData;