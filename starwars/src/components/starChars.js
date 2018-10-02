import React from 'react';

const StarChars =(props)=>{
    return(
        <div className='chars'>
        <h2 className='name'>{props.obj.name}</h2>
        <p><span>Birth Year:</span> {props.obj.birth_year}</p>
        <p><span>Skin color:</span> {props.obj.skin_color}</p>
        <p><span>Number of Films appeared in:</span> {(props.obj.films.length)}</p>
        </div>
    )
}
export default StarChars;