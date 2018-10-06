import React from 'react';
import styles from './StarWars.css'

const Character=(props)=>{
    

    return(  
        <div>
            
            <ul>
            <li>name: {props.character.name}</li>
            <li>birth_year: {props.character.birth_year}</li>
            <li>eye_color: {props.character.eye_color}</li>
            <li>gender: {props.character.gender}</li>
            <li>hair_color: {props.character.hair_color}</li>
            <li>height: {props.character.height}</li>
            
            <li>homeworld: {props.character.homeworld}</li>
            <li>{props.character.mass}</li>mass: 
            <li>skin_color: {props.character.skin_color}</li>


            films(pages under construction):{props.character.films.map((x)=>{
                return(
                    <li>
                    <a href={x}>{x}</a>
                    </li>
                )
            })}


                   Species(page under construction){props.character.species.map((x)=>{
                return(
                    <li>
                    <a href={x}>{x}</a>
                    </li>
                )
            })}


                   starships(under construction):{props.character.starships.map((x)=>{
                return(
                    <li>
                    <a href={x}>{x}</a>
                    </li>
                )
            })}

                   vehicles:(under construction){props.character.vehicles.map((x)=>{
                return(
                    <li>
                    <a href={x}>{x}</a>
                    </li>
                )
            })}</ul>
            
        </div>
     
    )
}

//make a for each



export default Character;