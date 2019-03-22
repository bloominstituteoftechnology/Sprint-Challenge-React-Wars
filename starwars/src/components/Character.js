import React from 'react'
import './StarWars.css';


const Character = (props) =>{
    return(
        <div className = 'characterCard'>
        <div className = 'card-header'>
            <h3>Name: {props.Character.name}</h3>
        </div>
        <p>DOB: {props.Character.birth_year}</p>
        <p>Gender: {props.Character.gender}</p>
        <p>Eye Color: {props.Character.eye_color}</p>
        <p>Mass: {props.Character.mass}kg</p>
        <p>Height: {props.Character.height}cm</p>
        <p>Flims: {props.Character.films.length}</p>
        
        </div>
    )

}
export default Character