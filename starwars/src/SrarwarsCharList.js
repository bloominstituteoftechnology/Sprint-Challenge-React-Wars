import React from 'react';
import CardsForChars from './CardsForChars';

const loopedChars = props => {
    console.log("PROPS: ", props)
    return (
        <div>
            {props.newstarData.map(item => {
                return (
                    // <div key={item.created}>
                    //     {item.name} {item.gender}
                    // </div>
                    <CardsForChars key ={item.created} charinCard={item} />
                )
            })}
        </div>
    )
}

export default loopedChars;