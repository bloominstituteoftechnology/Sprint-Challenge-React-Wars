import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

const Card = props => {
    return (
        <div className="test">
            
            {
                props.characters.map(chars => {
                    return (<div className='card'>
                        <CardHeader name={chars.name} />
                        <CardContent obj={chars} />
                    </div>)
                })
            }
            </div>
    )
}

export default Card;