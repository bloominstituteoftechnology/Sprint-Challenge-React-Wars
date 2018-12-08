import React from 'react';
import Poster from './poster';

import './StarWars.css';

/*received as props:
    infoNeeded = {this.state.starwarsChars}
*/


  function CreateWantedPosters(props) {  
      console.log(props);
        return(
            <div className="wantedCard">
                
                {props.infoNeeded.map(obj => {
                    return <Poster  
                        id={obj.created}
                        name={obj.name}
                        skin={obj.skin_color}
                        gender={obj.gender}
                        hair={obj.hair_color}
                        eyes={obj.eye_color}  
                        height={obj.height}
                        weight={obj.weight}
                        born={obj.birth_year}          
                    />
                })}
            </div>
        )
    };

export default CreateWantedPosters;