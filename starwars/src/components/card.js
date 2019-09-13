import React from 'react';

import Character from './Character';

const Cards = (props) => {
    const {data} = props;

    return(
        <div className='cards'>
            <Character name={data.name} birth={data.birth_year} />
        </div>
    )
}

export default Cards