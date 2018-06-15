import React from 'react';
import Cards from './Cards';

const CardsList = props => {
    return props.data.map(data => <Cards key={Math.random()} character={data} />);
}

export default CardsList;