import React from 'react';

function Characters(props) {
    return <div className="characterBox">
            <li>{props.starwarsChars.name}</li>
            <li>{props.starwarsChars.gender}</li>
            <li>{props.starwarsChars.species}</li>
            <li>{props.starwarsChars.starship}</li>
            </div>  
}
    export default Characters;