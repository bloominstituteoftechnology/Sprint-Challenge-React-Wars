import React from 'react';
import StarwarsChar from './StarwarsChar';

const StarwarsCharsList = props => {
    return <div className="container">
        {props.starwarsChars.map((starwarsChar) => (
            <StarwarsChar key={starwarsChar.name} starwarsChar={starwarsChar} />
        ))};

    </div>
}

export default StarwarsCharsList;