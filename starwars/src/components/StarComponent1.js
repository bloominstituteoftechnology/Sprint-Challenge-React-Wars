import React from 'react';
import './StarWars.css';

const StarWarsMemes = props => {
   
    return (

        <div>
        <h4>{props.starInfo.map((star, id) => 
        {return <div 
            key={id}
            className={[star.name, "divide"].join(" ")}
            

            ><button onClick={()=>props.addNewClass(id)} className = "toggle-button">{star.name} </button>
            <section className= {props.starToggle ? 'display-block': "display"}>
            <div>height: {star.height}</div>
            <div>mass: {star.mass}</div>
            <div>hair color: {star.hair_color}</div>
            <div>skin color: {star.skin_color}</div>
            <div>Eye Color: {star.eye_color}</div>
            <div>gender: {star.gender}</div>
            <div>Birth Year: {star.birth_year}</div>
            <div>Date Created: {star.created}</div>
            <div>Edited: {star.edited}</div>
            <div>Home World: {star.homeworld}</div>
            <div>Species: {star.species}</div>
            <div>Starships: {star.starships}</div>
            <div>Vehicles: {star.vehicles}</div>
            </section>
            </div>
            
        })}</h4>

        </div>
        
    )
}

export default StarWarsMemes