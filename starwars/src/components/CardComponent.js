import React from 'react';
import './Card.css';
import Title from './TitleComponent';
//import Image from './ImageComponent';
import Data from './DataComponent';
import Endnotes from './EndnotesComponent';

const Card = props => {
    console.log(props);
    console.log(props.char);
    return (
        <div className='card'>
             {props.char.map((character) => {
            return (
            <Data 
            key={character.name} 
            name={character.name} 
            birth={character.birth_year}
            gender={character.male}
            mass={character.mass}/>
            );  
        })}

           
            <Endnotes created={props.created} edited={props.edited}/>       
        </div>
    )
}

export default Card;

/*
 {props.char.map((character) => {
            return (
            <Data 
            key={character.name} 
            name={character.name} 
            birth={character.birth_year}
            gender={character.male}
            mass={character.mass}/>
            );  
        })}
          */