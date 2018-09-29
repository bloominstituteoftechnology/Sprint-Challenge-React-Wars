import React from "react";

const Character = props => {
    return (
        <div className="card">
            <h2 className="card_header">{props.char.name}</h2>
            
            <div className="card_content">
                <h3 className="charDOB">Date of birth: {props.char.birth_year}</h3>
                <h3 className="charSex">{props.char.gender}</h3>

                <div className="card-content_info">
                    Species: {props.char.species}
                    From: {props.char.homeworld}
                    Ship(s): {props.char.starships}

                    Skin: {props.char.skin_color}
                    Eye color: {props.char.eye_color}
                    Hair: {props.char.hair_color}
                    Mass: {props.char.mass}
                    Vehicle(s): {props.char.vehicles}
                </div>

                <h3 className="charMovies">Featured in: {props.char.films}</h3>
            </div> 
        </div>
    );
};

export default Characters;