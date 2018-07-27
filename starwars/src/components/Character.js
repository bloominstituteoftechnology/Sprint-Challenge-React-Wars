import React from 'react';
import Header from './Header';
import ContentCard from './ContentCard';

const Character = props => {
    return (
        <div className = "character" >
        <Header header = {props.header} species = {props.species}/>
        <ContentCard birthYear = {props.birthYear} eyeColor = {props.eyeColor} homeWorld = {props.homeworld}/>
        </div>
    )
}

export default Character; 