import React from 'react'; 

const ContentCard = props => {
    return(
        <div className = "content">
            <p>Birth Year: {props.birthYear}</p>
            <p>Eye color: {props.eyeColor}</p>
            <p>Hair color: {props.hair}</p>
            <p> Height: {props.height}</p>
            <p> Mass: {props.mass}</p>
        </div>
    )
}
export default ContentCard; 