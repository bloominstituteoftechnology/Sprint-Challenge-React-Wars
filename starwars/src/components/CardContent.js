import React from 'react';

const CardContent = props => {
    return (
        <div className="card-content">
            <p><span>Created at:</span> {props.obj.created.substring(0, 10)}</p>
            <p><span>Last Edition:</span> {props.obj.edited.substring(0, 10)}</p>
            <p><span>Birth Year:</span> {props.obj.birth_year}</p>            
            <p><span>Gender:</span> {props.obj.gender.toUpperCase()}</p>
            <p><span>Eyes Color:</span> {props.obj.eye_color}</p>
            <p><span>Hair Color:</span> {props.obj.hair_color}</p>
            <p><span>Skin Color:</span> {props.obj.skin_color}</p>
            <p><span>Height:</span> {props.obj.height}</p>
            <p><span>Mass:</span> {props.obj.mass}</p>
        </div>
    )
}

export default CardContent;