import React from 'react';

const CardContent = props => {
    return (
        <div className="card-content">
            <div className="containers">
                <p><span>Created:</span> {props.obj.created.substring(0, 10)}</p>
                <p><span>Edited:</span> {props.obj.edited.substring(0, 10)}</p>
            </div>
            <div className="containers">
                <p><span>Birth Year:</span> {props.obj.birth_year}</p>            
                <p><span>Gender:</span> {props.obj.gender.toUpperCase()}</p>
            </div>
            <div className="containers">
                <p><span>Eyes Color:</span> {props.obj.eye_color}</p>
                <p><span>Hair Color:</span> {props.obj.hair_color}</p>
            </div>
            <div className="containers">
                <p><span>Skin Color:</span> {props.obj.skin_color}</p>
                <p><span>Height:</span> {props.obj.height}</p>
            </div>
            <div className="containers">
                <p><span>Mass:</span> {props.obj.mass}</p>
            </div>    
        </div>
    )
}

export default CardContent;