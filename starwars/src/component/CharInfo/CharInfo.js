import React from 'react';
import './CharInfo.css'
const CharInfo = props => {
    console.log("homeworld prop", props.starwarsData.homeworld); // check if homeworld is getting called
    
    return (
        <div className="characterContainer">
            <div className="name">
                {props.starwarsData.name}
            </div>

            <div className="height">
                Height: {props.starwarsData.height}cm
            </div>

            <div className="mass">
                Mass: {props.starwarsData.mass}kg
            </div>

            <div className="hair_color">
                Hair color: {props.starwarsData.hair_color}
            </div>

            <div className="skin_color">
                Skin Color: {props.starwarsData.skin_color}
            </div>

            <div className="eye_color">
                Eye color: {props.starwarsData.eye_color}
            </div>

            <div className="birth_year">
                Birth year (Galactic Standard Calendar): {props.starwarsData.birth_year}
            </div>
            
            <div className="gender">
                Gender: {props.starwarsData.gender}
            </div>

            <div className="homeworld">
                {/* {props.starwarsChars.map((content) => (<Homeworld worldinfo={content} />))} */}
                Homeworld: {props.starwarsData.homeworld}
            </div>

            <div className="films">
                Films: {props.starwarsData.films}
            </div>

            <div className="species">
                Species: {props.starwarsData.species}
            </div>

            <div className="vehicles">
                Vehicles: {props.starwarsData.vehicles}
            </div>

            <div className="starships">
                Starships: {props.starwarsData.starships}
            </div>

            <div className="created">
                Created: {props.starwarsData.created}
            </div>
            
            <div className="edited">
                Edited: {props.starwarsData.edited}
            </div>

            <div className="url">
                URL: {props.starwarsData.url}
            </div>
        </div> // characterContainer
    )
}

export default CharInfo;