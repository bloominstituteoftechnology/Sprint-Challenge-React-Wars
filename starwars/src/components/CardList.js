import React from 'react';

import Card from './Card'

function CardList(props) {
    return (
        <div>
            {
                props.starwarsChars.map(starwarsChar => {
                    return <Card starwarsChar={starwarsChar.name} />
                })
            }
        </div>
    )
}
export default CardList;