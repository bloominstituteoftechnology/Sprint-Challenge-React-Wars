import React from 'react';
import PersonInfo from './PersonInfo';
// import Vehicles from './Vehicles';

const Person = ({info, show = false}) => {
    return (
        <div className="person-container" style={show ? { display: 'flex'} : {}}>
            <PersonInfo person={info}/>
            {/* <Vehicles starships={info.starships} vehicles={info.vehicles}/> */}
        </div>
    );
}

export default Person;
