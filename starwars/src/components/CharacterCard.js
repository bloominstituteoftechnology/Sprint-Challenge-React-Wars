import React from 'react';

const Card = (props) => {
    
    return (
        <div className='characterCard'>
            <div>
                {
                    props.characterImages.map((e, i) => {
                        if(props.character.name === e.name){
                            return (
                                <img className='characterImage' src={e.image} alt={e.name} key={e+i}/>
                            )
                        } else {
                            return null
                        }
                        
                    })
                }
            </div>
            <p>Name: {props.character.name}</p>
            <p>Gender: {props.character.gender}</p>
            <p>YOB: {props.character.birth_year}</p>
        </div>
    )
}

export default Card;