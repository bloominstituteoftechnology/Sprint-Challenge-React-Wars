import React from 'react'
import '../components/StarWars.css';

function GeneralData(props) {
    const { item }  = props;
    return (
        <div className='generalData container'>
            <h2>{item.name}</h2>
            <div>Birth Year: {item.birth_year}</div>
            {/* <p>Species: {item.species}</p> */}
        </div>
    )
}

export default GeneralData 