import React from 'react';
import '../components/StarWars.css';
import Card from './Card';


const Cardlist = (props) => {

    return (
        <div className={'cardlist'}>
        {props.characters.map(character =>(
            <Card value={character}/>
        )

        )}
    </div>
    )

}

export default Cardlist;