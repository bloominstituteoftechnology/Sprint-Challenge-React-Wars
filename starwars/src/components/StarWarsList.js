import React from 'react';
import StarWarsChar from './StarWarsChar';

export default class StarWarsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.chars.map((char, index) => (
                    <div key={index}>
                        <StarWarsChar
                            name={char.name}
                            birth_year={char.birth_year}
                            homeworld={char.homeworld}
                            species={char.species}
                            gender={char.gender}
                            hair_color={char.hair_color}
                            eye_color={char.eye_color}
                            skin_color={char.skin_color}
                            height={char.height}
                            mass={char.mass}
                            starships={char.starships}
                            vehicles={char.vehicles}
                            films={char.films}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

StarWarsChar.defaultProps = {
    chars: []
}

// const StarWarsList = props => {
//     return (
    //     <div>
    //         {props.char.map((char, index) => (
    //             <div key={index}>
    //                 <StarWarsChar
    //                     key={char._id}
    //                     char={char}
    //                 />
    //             </div>
    //         ))}
    //     </div>
    // )
// }

// export default StarWarsList;