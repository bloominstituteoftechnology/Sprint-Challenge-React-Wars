import React from 'react';

import Card from './Card'

function CardList(props) {
    return (
        <div className="card-list">
            {
                props.character.map(starwarsChars => {
                    return <Card character={starwarsChars} />
                })
            }
        </div>
    )
}
export default CardList;