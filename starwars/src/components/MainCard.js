import React from "react";   
 
const MainCard = props => {
   return (
    <div className = "main-card">
        <h2>Character Name: {props.name}</h2>
        <p>Birth Year: {props.birth_year}</p>
        <p>Height: {props.height}</p>
        <p>Films: {props.films}</p>
    </div>
   );
}
export default MainCard