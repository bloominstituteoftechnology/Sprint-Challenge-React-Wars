import React from 'react';
import Header from './Header';
import ContentCard from './ContentCard';

const Character = props => {
    return (
        <div className = "character" >
        <Header header = {props.header} />
        <ContentCard birthYear = {props.birthYear} 
                    eyeColor = {props.eyeColor}
                    hair = {props.hair}
                    height = {props.height}
                    mass = {props.mass}
                    />
        </div>
    )
}

export default Character; 