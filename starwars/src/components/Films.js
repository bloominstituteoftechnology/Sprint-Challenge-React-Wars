import React from 'react';
import {CardText, CardSubtitle} from 'reactstrap';

const Films = (props) => {
    return (
        <CardSubtitle>
            <p style={{fontWeight: 'bold'}}>Film Appearances</p>
            {props.characterFilms.map((film, index) => {
                return (
                    <CardText key={`${film}${index}`}>{index + 1}. {film}</CardText>
                )
            })}
        </CardSubtitle>
    )
};

export default Films;