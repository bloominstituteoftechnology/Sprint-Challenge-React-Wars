import React from 'react'
import Card from './Card'


const StarwarsCharList = props => {
    return (
        <div>
            {props.starwarsChars.map(card => {
                return <Card key={card.id} card={card} />
            })}
        
        </div>
    );
}
 
export default StarwarsCharList;