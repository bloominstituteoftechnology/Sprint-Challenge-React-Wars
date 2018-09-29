import React from 'react';

const Card = (props) => {
    return (
        <div className="card">

            <div>
                Name: {props.name} <br></br>
            </div>

            <div className={ props.gender === 'n/a' ? 'hidden' : ''}>
                Gender: {props.gender}
            </div>  

            <div className={ props.birthYear === 'unknown' ? 'hidden' :'' }>
                Birth Year: {props.birthYear}
            </div>

            <div className={ props.hairColor === 'n/a' ? 'hidden' : props.hairColor === 'none' ? 'hidden' : '' } >
                Hair Color: {props.hairColor} <br></br>
            </div>

            <div>
                Eye Color: {props.eyeColor}
            </div>

            <div>
                Skin Color: {props.skinColor}
            </div>

            <div>
                Height: {props.height} cm 
            </div>

            <div>
                Mass: {props.mass}
            </div>

            <div className={ props.starships.length === 0 ? 'hidden' : '' } >
                Startships: {props.starships.length}
            </div>

            <div className={ props.vehicles.length === 0 ? 'hidden' : '' } >
                Vehicles: {props.vehicles.length}
            </div>

            <div className={ props.films.length === 0 ? 'hidden' : '' }     >
                Films Appeared In: {props.films.length}
            </div>

        </div>
    )
}

export default Card;