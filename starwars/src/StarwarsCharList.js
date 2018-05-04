import React from 'react'
import Card from './Card'
import './StarwarsCharList.css'

const StarwarsCharList = props => {
    return (
        <div className="char-list">
            {props.starwarsChars.map(card => {
                return <Card key={card} card={card} />
            })}
        </div>
    );
}
 
export default StarwarsCharList;