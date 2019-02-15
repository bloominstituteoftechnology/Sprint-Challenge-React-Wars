import React from "react";
import ContentCard from "./ContentCard";


const Character = props => {
    return (
        <div className = "character" >
        <ContentCard name = {props.name} 
                    birthYear = {props.birthYear} 
                    eyeColor = {props.eyeColor}
                    hair = {props.hair}
                    height = {props.height}
                    mass = {props.mass}
                    created = {props.created}
                    edited = {props.edited}
                    gender = {props.gender}
                    homeworld = {props.homeworld}
                    />
        </div>
    )
}

export default Character;