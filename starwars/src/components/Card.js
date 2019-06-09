import React from 'react';
import '../components/StarWars.css';




const Card = (props) => {
    
    
    return(
        <div className={'card'}>
        <div className={'row'}>
        <div className={'column bold'}>Name:</div>
        <div className={'column'}>{props.value.name}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Gender:</div>
        <div className={'column'}>{props.value.gender}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Date of Birth:</div>
        <div className={'column'}>{props.value.birth_year}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Height:</div>
        <div className={'column'}>{props.value.height}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Mass:</div>
        <div className={'column'}>{props.value.mass}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Hair Color:</div>
        <div className={'column'}>{props.value.hair_color}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Eye Color:</div>
        <div className={'column'}>{props.value.eye_color}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Skin Color:</div>
        <div className={'column'}>{props.value.skin_color}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Date Created:</div>
        <div className={'column'}>{props.value.created}</div>
        </div>
        <div className={'row'}>
        <div className={'column bold'}>Date Modified:</div>
        <div className={'column'}>{props.value.edited}</div>
        </div>

           

        </div>

    )
}

export default Card;