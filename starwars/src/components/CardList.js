import React from 'react';
import SWCard from './SWCard';

const CardList = props => {
    return(

        <React.Fragment>
            {props.monkeys.map((eachOneInMap, index) => (
            <SWCard key={eachOneInMap.index} it={eachOneInMap} /> ))}

        </React.Fragment>
    );
};


export default CardList;