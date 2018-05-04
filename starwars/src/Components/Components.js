
import React from 'react';
import './Components.css';
import PropTypes from 'prop-types';


export const Components = (p) => {
    return (
        <React.Fragment>
            {p.starwarsChars.map((chars, i) => (
                <div key={chars + i} className='Container'>
                    <h1 className='Container-Header'>{chars.name}</h1>
                    <div className='Container-Data'>
                        <p><span className='Container_'>birth-year</span>:{chars.birth_year}</p>
                        <p><span className='Container-info'>gender</span>{chars.gender}</p>
                        <p><span className='Container-info'>hair-color</span>:{chars.hair_color}</p>
                        <p><span className='Container-info'>eye-color</span>:{chars.eye_color}</p>
                        <p><span className='Container-info'>skin-color</span>:{chars.skin_color}</p>
                        <p><span className='Container-info'>height</span>:{chars.height} cm</p>
                        <p><span className='Container-info'>mass</span>:{chars.mass} kg</p>
                    </div>
                </div>    
            ))}
            </React.Fragment>
    );
} 

Components.PropTypes = {
    starwarsChars: PropTypes.arrayOf((value, key) => {
        if (typeof value[key].name !== 'string') {
            return new ErrorEvent(
                'Invaild prop' + key
            );
        };
    })
};