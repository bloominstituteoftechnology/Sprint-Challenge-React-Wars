import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';


const Card = props => {
    return (
        <div>
            {
                props.characters.map(chars => {
                    return  (<div className="card">
                                <CardHeader name={chars.name} key={chars.name} />
                                <CardContent obj={chars} key={chars.birth_year}/>
                            </div>)                       
                })
            }
        </div>
    )
}

export default Card;