import React from "react";

export default function PeopleCard (props){
return(
    <div>
        <h2>{props.name}</h2>
        <h3>{props.sex} </h3>
        <h3>{props.bDay} </h3>
        <h3>{props.height} </h3>
        <h3>{props.mass} </h3>
        <h3>{props.hairColor} </h3>
        <h3>{props.skinColor} </h3>
        <h3>{props.eyeColor} </h3>
    </div>
    );
};