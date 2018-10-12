import  React from 'react';
const chars = props =>{
    return <div className = 'card'>
    <p>Name :{props.starChar. name}</p>
    <p>Height:{props.starChar.height}</p>
    <p>StarShips:{props.starChar.starships}</p>
    <p> Species:{props.starChar.species}</p>
    <p> Skincolor:{props.starChar.skincolor}</p>
    <p> Gender:{props.starChar.gender}</p>
    <p> Created:{props.starChar.created}</p>
    <p> Edited:{props.starChar.edited}</p>
    <p> EyeColor:{props.starChar.eyecolor}</p>
    <p> Films:{props.starChar.films}</p>
    <p> Hair Color:{props.starChar.haircolor}</p>
    <p> HomeWorld:{props.starChar.homeworld}</p>
    <p> Mass:{props.starChar.mass}</p>
    <p> Vehicles:{props.starChar.vehicles}</p>
    <p> BirthYear:{props.starChar.birthyear}</p>
    </div>
}