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
                Hair color: {props.hairColor} <br></br>
            </div>

            <div>
                Eye color: {props.eyeColor}
            </div>


        Skin color: {props.skinColor} <br></br>
        Height: {props.height} <br></br>
        Mass: {props.mass} <br></br>
        I have {props.starships.length} starships and {props.vehicles.length} vehicles. <br></br>

        I was in {props.films.length} <br></br>


        </div>
    )
}

export default Card;