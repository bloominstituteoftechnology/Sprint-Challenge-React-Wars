import React from 'react';
import Cards from './Cards';
import './StarWars.css';



const StarWarsLists = ({ data }) => {
    return (
        <div className='cardlist'>
            {data.map((item, index) => {
                return (
                    <Cards index={index} key={index} data={item} />
                )
            })}
        </div>
    )
}
export default StarWarsLists;