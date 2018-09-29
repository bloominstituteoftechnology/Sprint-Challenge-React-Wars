import React from 'react';
import Card from './Card.js';

class CardList extends React.Component {
    render() {
        return (
            this.props.starwars.map(char => {
                return <Card selected={this.props.selected}
                 name={char.name} 
                 year={char.birth_year}
                 gender={char.gender}
                 hair={char.hair_color}
                 eyes={char.eye_color}
                 skin={char.skin_color} />
            })
        )
    }  
}

export default CardList;