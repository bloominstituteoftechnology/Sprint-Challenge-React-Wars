import React from 'react';
import '../components/StarWars.css';
import Card from './Card';


const Cardlist = (props) => {

    return (
        <div>
        {props.character.map(detail =>(
            <Card />
        )

        )}
    </div>
    )

}

export default Cardlist;