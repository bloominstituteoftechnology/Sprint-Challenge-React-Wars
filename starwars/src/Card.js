import React from 'react'
import Name from './components/Name'
import ContentContainer from './components/content/ContentContainer'

const Card = ({name, height, mass, hairColor, eyeColor, skinColor, birthYear, gender, homeWorld}) => {
    return (
        <div>
            <Name name={name}/>
            <ContentContainer height={height} mass={mass} hairColor={hairColor} eyeColor={eyeColor} skinColor={skinColor} birthYear={birthYear} gender={gender} homeWorld={homeWorld}/>
        </div>
    )
}

export default Card