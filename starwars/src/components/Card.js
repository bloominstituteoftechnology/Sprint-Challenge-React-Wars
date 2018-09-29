import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
        I am {props.name} <br></br>
        I was born in {props.birthYear} <br></br>
        I was in {props.films.length} <br></br>
        I am {props.gender}

        </div>
    )
}

export default Card;