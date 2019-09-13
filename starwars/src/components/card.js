import React from 'react'
import Character from './Character'

const Cards = (props) => {
    return(
        <div className='cards'>
        {Array.from(props.charactersCollection).map((i) => {
            let name=i['name'];
            let birth_year=i['birth_year'];

            return <Character name={name} birth_year={birth_year} />;})}
        </div>
    )
}

export default Cards