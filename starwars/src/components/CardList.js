import React from 'react';

import Card from './Card'

function CardList(props) {
    return (
        <div>
            {
                props.starwarsChars.map(id => (
                    <Card key={id.name} character={id} />
                ))
            }
        </div>
    )
}
export default CardList;