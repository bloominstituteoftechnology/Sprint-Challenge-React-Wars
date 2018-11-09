import React from 'react';

const Character = props => {
    return (
        <div 
            // className={props.todo.completed ? 'completed todo-list' : 'todo-list'}
            // onClick={()=> props.toggleCompleted(props.todo.id)}
            // id={props.todo.display ? null : 'display-none'}
            className="character-list__character"
        >
         <div className="character-list__character--name">
            <p>Name: </p>
            <p>{props.character.name}</p>
         </div>
         <div className="character-list__character--birth-year">
            <p>Year of Birth:</p> 
            <p>{props.character.birth_year}</p>
         </div>
         <div className="character-list__character--gender">
            <p>Gender: </p>
            <p>{props.character.gender}</p>
         </div>
         <div className="character-list__character--eye-color">
            <p>Eye Color:</p>
            <p> {props.character.eye_color}</p>
         </div>
         <div className="character-list__character--hair-color">
         <p>Hair Color:</p> 
         <p>{props.character.name}</p>
         </div>
         <div className="character-list__character--name">
         Name {props.character.name}
         </div>
        </div>
    );
}

export default Character;