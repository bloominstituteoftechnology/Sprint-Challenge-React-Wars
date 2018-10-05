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
            <section className= {props.starToggle ? 'display-none' : "display"}>
            <div>Height: {star.height}</div>
            <div>Mass: {star.mass}</div>
            <div>Hair Color: {star.hair_color}</div>
            <div>Skin Color: {star.skin_color}</div>
            <div>Eye Color: {star.eye_color}</div>
            <div>Gender: {star.gender}</div>
            <div>Birth Year: {star.birth_year}</div>
            <div>Date Created: {star.created}</div>
            <div>Edited: {star.edited}</div>
            
            

            </section>
            </div>
            
        })}</h4>

        </div>
        
    )
}

export default StarWarsMemes