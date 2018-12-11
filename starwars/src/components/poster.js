import React from 'react';

/* Passed from props:
     id={obj.created}
    name={obj.name}
    skin={obj.skin_color}
    gender={obj.gender}
    hair={obj.hair_color}
    eyes={obj.eye_color}  
    height={obj.height}
    weight={obj.weight} 
    born={obj.birth_year}
*/

function Poster(props) {
    return(
        <div className="individualPosters">
            <h1>Wanted:</h1>
            <h2>{props.name}</h2>
            <h3>Description:</h3>

            <p>Suspect is a {props.skin} skinned {props.gender} with {props.hair} hair and {props.eyes} eyes. Approximately {props.height}cm tall and weighs approximately {props.weight}lbs. Suspect is believed to have been born in {props.born}</p>
            <h4>Reward $$$ Dead or Alive!</h4>
        </div>
    )
}

export default Poster;