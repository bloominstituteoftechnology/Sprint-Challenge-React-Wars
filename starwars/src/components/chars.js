import  React from 'react';
const chars = props =>{
    return <div className = 'card'>
    <p>Name :{props.starChars. name}</p>
    <p>Height:{props.starChars.height}</p>
    <p>StarShips:{props.starChars.starships}</p>
    <p> Species:{props.starChars.species}</p>
    <p> Skincolor:{props.starChars.skincolor}</p>
    <p> Gender:{props.starChars.gender}</p>
    <p> Created:{props.starChars.created}</p>
    <p> Edited:{props.starChars.edited}</p>
    <p> EyeColor:{props.starChars.eyecolor}</p>
    <p> Films:{props.starChars.films}</p>
    <p> Hair Color:{props.starChars.haircolor}</p>
    <p> HomeColor:{props.starChars.haircolor}</p>
    <p> HomeWorld:{props.starChars.homeworld}</p>
    <p> Mass:{props.starChars.mass}</p>
    <p> Vehicles:{props.starChars.vehicles}</p>
    <p> BirthYear:{props.starChars.birthyear}</p>
    </div>
}