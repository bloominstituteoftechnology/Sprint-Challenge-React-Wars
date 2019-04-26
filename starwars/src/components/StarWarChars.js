import React from 'react'

const StarWarChars = (props) => {
    return (
        <ol>
            {props.starwarsChars.map(char => <li>{char.name}</li>) }
        </ol>
    )
}

export default StarWarChars