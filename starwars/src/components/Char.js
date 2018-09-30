import React, { Component } from 'react';

const Char = (props) => {

    <div className = "parent-wrapper">
        <div className = "char-wrapper">
            <h1 className = "char-header">
                {props.name}
            </h1>
            <p>Born: {props.birth_year}</p>
            <div className= "description-wrapper">
                <ul className = "description">
                    <li>Gender: {props.gender}</li>
                    <li>height: {props.height}</li>
                    <li>Mass: {props.mass}</li>
                    <li>Skin Color: {props.skin}</li>
                    <li>Hair Color: {props.hair}</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Char;