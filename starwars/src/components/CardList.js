import React from 'react';

import Card from './Card'

function CardList(props) {
    return (
        <div>
            {
                props.starwarsChars.map(starwarsChars => {
                    return <Card starwarsChars={starwarsChars} />
                })
            }
        </div>
    )
}
export default CardList;