import React from 'react';
import {CardText, CardSubtitle} from 'reactstrap';

const Films = (props) => {
    return (
        <CardSubtitle className='cardSeparator'>
            <p style={{fontWeight: 'bold', marginTop: 10}}>Film Appearances</p>
            {props.characterFilms.map((film, index) => {
                return (
                    <CardText key={`${film}${index}`}>{index + 1}. {film}</CardText>
                )
            })}
        </CardSubtitle>
    )
};

export default Films;