import React from "react";

const CharacterCard = props => {
    return (
        <div>
<h1>{props.name}</h1>
<h2>{props.birth}</h2>
<h2>{props.eyes}</h2>
<h2>{props.gender}</h2>
<h2>{props.hair}</h2>
<h2>{props.height}</h2>
<h2>{props.mass}</h2>
<h2>{props.skin}</h2>
<h2>{props.home}</h2>
<h2>{props.films}</h2>
<h2>{props.species}</h2>
<h2>{props.starships}</h2>
<h2>{props.vehicles}</h2>
        </div>

    );
};

export default CharacterCard