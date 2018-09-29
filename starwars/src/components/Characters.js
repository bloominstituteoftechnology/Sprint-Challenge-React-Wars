import React from 'react';

 const Characters = (props) => {
    return (
        <section className={'character-card ' + props.name.toLowerCase().replace(' ', '')}>

            <div className='card-container'>
                <div className='information'>
                    <h2 className='character-name'>
                        {props.name}
                    </h2>

                    <p className='dob'>
                        <strong>DOB: </strong>{props.dob}
                    </p>

                    <p className='gender'>
                        <strong>Gender: </strong>{props.gender}
                    </p>
                </div>

                <div className='appearance'>
                    <h3>Appearance</h3>
                    <hr/>

                    <p className='height'>
                        <strong>Height: </strong>{props.height} cm
                    </p>

                    <p className='mass'>
                        <strong>Mass: </strong>{props.mass} kg
                    </p>

                    <p className='hair-color'>
                        <strong>Hair Color: </strong>{props.hairColor}
                    </p>

                    <p className='skin-color'>
                        <strong>Skin Color: </strong>{props.skinColor}
                    </p>
                </div>
            </div>
        </section>
    );
}
 export default Characters; 