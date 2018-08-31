import React, { Component } from 'react';

const StarWarsData = props => {
    return(
    <div className="data-card">
         <h3>{props.starwarsChars.name} <br/></h3>
            <div className="right-content"> 
                <span>Birth Year</span>: {props.starwarsChars.birth_year} <br/>
                <span>Gender</span>: {props.starwarsChars.gender}<br/>
                <span>Eye-Color</span>: {props.starwarsChars.eye_color}<br />
            </div>
            <div className="left-content">
                <span>Hair-Color</span>: {props.starwarsChars.hair_color}<br />
                <span>Height</span>: {props.starwarsChars.height}<br />
                <span> Skin-Color</span>: {props.starwarsChars.skin_color}<br />
            </div>
    </div>
    );
};

export default StarWarsData;