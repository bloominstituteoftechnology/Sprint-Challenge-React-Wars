import React, { Component } from 'react';

const Card = (props) => {
    return (
        <section className='card'>
            <h4 className='name'>{props.char.name}</h4>
            <section className='birthYear'>Born:  {props.char.birth_year}</section>
            <section className='gender'>Gender: {props.char.gender}</section>
            <section className='skinColor'>Complexion: {props.char.skin_color}</section>
            <section className='hairColor'>Hair: {props.char.hair_color}</section>         
            <section className='eyeColor'>Eyes: {props.char.eye_color}</section>
        </section>
    )
}

export default Card