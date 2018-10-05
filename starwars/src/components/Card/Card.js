import React from 'react';
import './Card.css';



const Card = props =>{
    console.log(props.character)
    return(
        <div className='card'>
            <div className='card-header'>{props.character.name}</div>
            <div className='card-body'>
                <p className='card-body-header'>Url:</p><p className='card-body-detail'>{props.character.url}</p>
                <br></br>
                <p className='card-body-header'>Home World:</p><p className='card-body-detail'>{props.character.homeworld}</p>
                <br></br>
                <p className='card-body-header'>Species:</p>
                <div>
                    {
                        props.character.species.map((element,index) =>{
                            return (
                                <p key={index} className='card-body-subdetail'>{element}</p>
                            )
                        })
                    }                
                </div>
                <p className='card-body-header'>Birth Year:</p><p className='card-body-detail'>{props.character.birth_year}</p>
                <br></br>
                <p className='card-body-header'>Height:</p><p className='card-body-detail'>{props.character.height}</p>
                <br></br>
                <p className='card-body-header'>Films:</p>
                <div>
                    {
                        props.character.films.map((element,index) =>{
                            return (

                                <p key={index} className='card-body-subdetail'>{element}</p>
                                
                            )
                        })
                    }                
                </div>
                <p className='card-body-header'>Starships:</p>
                <div>
                    {
                        props.character.starships.map((element,index) =>{
                            return (
                                <p key={index} className='card-body-subdetail'>{element}</p>
                            )
                        })
                    }                
                </div>

                <br></br>
            </div>
        </div>
    )
}

export default Card;