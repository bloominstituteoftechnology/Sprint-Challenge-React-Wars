import React from 'react';
import '../components/StarWars.css';

function StarWars(props) {
    // console.log(props.character);
    return (
        <div className='character-container'>                       
            <h2 className='character-name'>
            {props.character.name}            
            </h2> 
            <div className='character-content'>
                <div className='characters-info'>
                    <div className='character-stats'>
                        <p className='labels'>Birth Year:</p>
                        <div>
                            {props.character.birth_year}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Eye Color:</p>
                        <div>
                        {props.character.eye_color}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Gender:</p>
                        <div>
                            {props.character.gender}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Hair Color:</p>
                        <div>
                            {props.character.hair_color}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Height:</p>
                        <div>
                            {props.character.height}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Mass:</p>
                        <div>
                            {props.character.mass}
                        </div>
                    </div>
                    <div className='character-stats'>
                        <p className='labels'>Skin Color:</p>
                        <div>
                            {props.character.skin_color}
                        </div>
                    </div>
                </div>                    
            </div>
        </div>
    );
}

export default StarWars;