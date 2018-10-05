import React from 'react';
import Cards from './Cards';

const StarWarsList = props => {
    return (
        <div className = 'cardlist'>
            {props.data.map( (item, index) => {
                return (
                     <Cards index={index} key={index} data={item} />
                   )
                })}
        </div>
    )
}
export default StarWarsList;