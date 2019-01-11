import React from 'react';
import StarWars from './StarWars.css'

import Card from './Card'

function CardList(props) {
    return (
        <div>
            {
                props.character.map(starwarsChars => {
                    return <Card character={starwarsChars} />
                })
            }
        </div>
    )
}
export default CardList;