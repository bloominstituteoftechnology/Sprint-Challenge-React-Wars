// import React, { Component } from 'react';

// class Card extends Component {
//     render(){

//     }
// }

import React from 'react';
import Card from './Card'

const CardsComponent = props => {
    return(
        <div>
            {   props.cards.map(card => 
                    <Card 
                        name={card.name}
                        birth_year={card.birth_year}
                        eye_color={card.eye_color}
                        gender={card.gender}
                        key={card.created}
                    />
                )
            }
        </div>
    )
}

export default CardsComponent;