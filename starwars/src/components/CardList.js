import React from 'react';
import SWCard from './SWCard';

const CardList = props => {
    return(

        <div>
            {props.itit.map((eachOneInMap, index) => (
            <SWCard key={eachOneInMap.index} it={eachOneInMap} /> ))}

        </div>
    );
};


export default CardList;