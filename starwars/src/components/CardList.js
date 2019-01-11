import React from 'react';

import Card from './Card'

function CardList(props) {
    return (
        <div>
            {
                props.starwarsChars.map(starwarsChars => (
                    <Card starwarsChars={starwarsChars.name} character={starwarsChars} />
                ))
            }
        </div>
    )
}
export default CardList;