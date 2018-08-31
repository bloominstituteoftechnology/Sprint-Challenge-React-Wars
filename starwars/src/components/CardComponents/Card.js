import React from "react";

function Card(props) {
    return(
        <div className="character" >
            <div>
                <h1 className= "nameHeader">{props.char.name}</h1>
                
                <div className="content">
                    <h3>Gender: {props.char.gender}</h3>
                    <h3>Height: {props.char.height}</h3>
                    <h3>Weight: None of your business ({props.char.mass} kg)</h3>
                    <h3>Hair Color: {props.char.hair_color}</h3>
                    <h3>Eye Color: {props.char.eye_color}</h3>
                    <h3>Birth Year: {props.char.birth_year}</h3>
                </div>
                
                <img  src="" alt="none" ></img>
            </div>
        </div>
    );
};

export default Card; 