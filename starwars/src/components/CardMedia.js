import React from 'react';
import StarStock from '../img/star-wars-logo-new-tall.jpg'

const CardMedia = (props) => {
    return (
        <div className='imgWrapper'>
            <img src={StarStock} alt='star wars character placeholder' />
        </div>
    )
}

export default CardMedia;