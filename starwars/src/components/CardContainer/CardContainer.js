import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card'


const CardContainer = props =>{
    return(
        <section>
            <Card character={props.character}/>
        </section>
    )
}
export default CardContainer;