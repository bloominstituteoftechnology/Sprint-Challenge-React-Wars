import React, {Fragment, Component} from 'react';
import './StarWars.css';
import Card from './Card';

class Characters extends Component {
    constructor(props) {
        super();

    }

    render() {
        return (
            <Fragment>
                {this.props.charactersArray.map(x => <Card
                    name={x.name}
                    gender={x.gender}
                    birthYear={x['birth_year']}
                    eyeColor={x['eye_color']}
                    hairColor={x['hair_color']}
                    height={x.height}
                    mass={x.mass}
                    species={x.species}
                    homeWorld={x.homeworld}
                    starShips={x.starships}
                    films={x.films}
                />)}
            </Fragment>
        );
    }

}

export default Characters;