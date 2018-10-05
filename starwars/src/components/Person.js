import React from 'react';
import PersonInfo from './PersonInfo';
// import Vehicles from './Vehicles';

const Person = ({info}) => {
    return (
        <div>
            <PersonInfo person={info}/>
            {/* <Vehicles starships={info.starships} vehicles={info.vehicles}/> */}
        </div>
    );
}

export default Person;
