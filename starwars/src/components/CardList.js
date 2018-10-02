import React from "react-dom";
import Card from "./Card";

class CardList extends React.Component {
    render() {
        return (
            this.props.starwars.map(character => {
                return (
                    <Card 
                    key={this.props.name}
                    name={character.name}
                    birthYear={character.birth_year}
                    homeWorld={character.homeworld}
                    gender={character.genter}
                    hairColor={character.hair_color}
                    height={character.height}
                    weigth={character.weigth}
                    films={character.films} />
                )
            })
        )
    }
}
export default CardList;