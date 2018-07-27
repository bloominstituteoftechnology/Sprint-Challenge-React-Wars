import React from 'react'; 

const ContentCard = props => {
    return(
        <div className = "content">
            <p>Birth Year: {props.birthYear}</p>
            <p>Eye color: {props.eyeColor}</p>
            <p>Homeworld:</p>
            <img src = {props.homeWorld} />
        </div>
    )
}
export default ContentCard; 